"""Validate generated metadata, structured data, sitemap coverage and internal URLs."""
import json
import sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

root = Path(sys.argv[1])
origin = sys.argv[2].rstrip('/')
errors = []
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.canonicals=[]; self.h1=0; self.description=[]; self.schemas=[]; self.capture=False; self.buffer=''; self.links=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='h1': self.h1+=1
        if tag=='link' and a.get('rel')=='canonical': self.canonicals.append(a.get('href'))
        if tag=='meta' and a.get('name')=='description': self.description.append(a.get('content'))
        if tag=='script' and a.get('type')=='application/ld+json': self.capture=True; self.buffer=''
        for k in ('href','src'):
            if a.get(k,'').startswith('/'): self.links.append(a[k])
    def handle_data(self,data):
        if self.capture:self.buffer+=data
    def handle_endtag(self,tag):
        if tag=='script' and self.capture:
            self.schemas.append(json.loads(self.buffer));self.capture=False
pages=set()
for file in root.rglob('*.html'):
    path='/' + file.relative_to(root).as_posix().removesuffix('index.html')
    if path=='/casos-de-exito/': continue
    page=Page(); page.feed(file.read_text()); expected=origin+path;pages.add(expected)
    if page.canonicals != [expected]: errors.append(f'{path}: canonical {page.canonicals}')
    if page.h1 != 1 or len(page.description)!=1 or not page.description[0]:errors.append(f'{path}: missing/duplicate metadata')
    graph=[node for schema in page.schemas for node in schema.get('@graph',[])]
    if not {'LocalBusiness','WebSite','WebPage','AboutPage','ContactPage'}.intersection(n.get('@type') for n in graph):errors.append(f'{path}: missing site graph')
    for link in page.links:
        urlpath=unquote(urlsplit(link).path)
        base=urlsplit(origin).path
        if base and not urlpath.startswith(base+'/'): errors.append(f'{path}: wrong base {link}');continue
        target=root/urlpath[len(base):].lstrip('/')
        if not target.exists():errors.append(f'{path}: broken reference {link}')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
index=ET.parse(root/'sitemap.xml')
urls=set()
for loc in index.findall('.//s:loc',ns):
    assert loc.text.startswith(origin+'/')
    sitemap=ET.parse(root/loc.text.removeprefix(origin+'/'))
    urls.update(node.text for node in sitemap.findall('.//s:url/s:loc',ns))
if urls!=pages: errors.append(f'Sitemap mismatch: missing={pages-urls}, extra={urls-pages}')
if f'Sitemap: {origin}/sitemap.xml' not in (root/'robots.txt').read_text(): errors.append('robots sitemap mismatch')
print(json.dumps({'pages':len(pages),'sitemap_urls':len(urls),'errors':errors},ensure_ascii=False,indent=2))
assert not errors
