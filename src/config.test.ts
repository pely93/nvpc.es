import { describe, expect, it } from "vitest";
import { resolveSeo, withBase } from "@/config";

describe("resolveSeo", () => {
  it("appends the site name when missing from the title", () => {
    const seo = resolveSeo({ title: "Servicios", description: "desc" });
    expect(seo.title).toBe("Servicios | NVPC");
  });

  it("keeps a title that already contains NVPC untouched", () => {
    const seo = resolveSeo({ title: "NVPC · Inicio", description: "desc" });
    expect(seo.title).toBe("NVPC · Inicio");
  });

  it("resolves a relative canonical against the site url, keeping the GitHub Pages base path", () => {
    const seo = resolveSeo({ title: "x", description: "y", canonical: "/tarifas/" });
    expect(seo.canonical).toBe("https://pely93.github.io/nvpc.es/tarifas/");
  });

  it("defaults noindex to false", () => {
    const seo = resolveSeo({ title: "x", description: "y" });
    expect(seo.noindex).toBe(false);
  });
});

describe("withBase", () => {
  it("prefixes an absolute path with the configured base path", () => {
    expect(withBase("/tarifas/")).toBe("/nvpc.es/tarifas/");
  });

  it("adds a leading slash to a path missing one", () => {
    expect(withBase("tarifas/")).toBe("/nvpc.es/tarifas/");
  });
});
