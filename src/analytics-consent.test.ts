import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("./components/AnalyticsConsent.astro", import.meta.url), "utf8");
const script = source.split("<script is:inline>")[1].split("</script>")[0];
function simulate(choice?: string, expired = false, hostname = "nvpc.es") {
  const handlers: Record<string, () => void> = {};
  const added: { src: string }[] = [];
  const buttons = ["granted", "denied"].map(choice => ({ dataset: { analyticsChoice: choice }, addEventListener: (_: string, cb: () => void) => { handlers[choice] = cb; }, focus() {} }));
  const panel = { hidden: true, querySelectorAll: () => buttons, querySelector: () => buttons[0] };
  let saved = choice ? JSON.stringify({ choice, expires: Date.now() + (expired ? -10000 : 10000) }) : null;
  let reloads = 0;
  const window: Record<string, unknown> = {};
  const document = { cookie: "_ga=old; _ga_FD38J4BHZ5=old", getElementById: () => panel, querySelectorAll: () => [], createElement: () => ({}), head: { appendChild: (s: {src:string}) => added.push(s) } };
  runInNewContext(script, { window, document, location: { hostname, reload: () => { reloads++; } }, localStorage: { getItem: () => saved, setItem: (_:string,value:string) => { saved=value; } } });
  return { handlers, added, panel, window, reloads: () => reloads, saved: () => JSON.parse(saved || 'null') };
}
describe("basic analytics consent", () => {
  it("makes no Google script request before consent or when denied", () => {
    for (const choice of [undefined, "denied"]) expect(simulate(choice).added).toHaveLength(0);
  });
  it("loads the existing property once only after acceptance", () => {
    const s=simulate(); s.handlers.granted(); s.handlers.granted();
    expect(s.added).toHaveLength(1);
    expect(s.added[0].src).toContain("id=G-FD38J4BHZ5");
    expect(s.saved().choice).toBe("granted");
    expect(s.panel.hidden).toBe(true);
  });
  it("honors remembered acceptance and asks again after expiry", () => {
    expect(simulate("granted").added).toHaveLength(1);
    const expired=simulate("granted",true);
    expect(expired.added).toHaveLength(0); expect(expired.panel.hidden).toBe(false);
  });
  it("disables analytics and reloads when acceptance is revoked", () => {
    const s=simulate("granted"); s.handlers.denied();
    expect(s.window["ga-disable-G-FD38J4BHZ5"]).toBe(true);
    expect(s.saved().choice).toBe("denied"); expect(s.reloads()).toBe(1);
  });
  it("never enables analytics on the review domain", () => {
    expect(simulate("granted",false,"pely93.github.io").added).toHaveLength(0);
  });
});
