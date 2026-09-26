import sharp from 'sharp';
import {readdir, mkdir, stat, writeFile} from 'node:fs/promises';
const root=process.cwd()+'/public/logos'; await mkdir(root+'/optimized',{recursive:true});
let before=0,after=0;
const widths={};
for(const file of await readdir(root)){
 if(!/\.(jpg|png)$/.test(file)||file==='nvpc.jpg')continue;
 const stem=file.replace(/\.[^.]+$/,'');
 widths[stem]=[];
 for(const width of [320,640]) { const info=await sharp(root+'/'+file).resize({width,withoutEnlargement:true}).webp({quality:85,alphaQuality:100}).toFile(`${root}/optimized/${stem}-${width}.webp`); widths[stem].push(info.width); }
 const a=(await stat(root+'/'+file)).size,b=(await stat(`${root}/optimized/${stem}-640.webp`)).size;
 before+=a;after+=b;console.log(`${file}: ${a} -> ${b}`);
}
console.log(JSON.stringify({before,after,savingPercent:Math.round((1-after/before)*100)}));

await writeFile("src/data/logo-sizes.json",JSON.stringify(widths,null,2)+"\n");
