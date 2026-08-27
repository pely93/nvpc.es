import { describe, expect, it } from "vitest";
import { resolveSeo } from "@/config";

describe("resolveSeo", () => {
  it("appends the site name when missing from the title", () => {
    const seo = resolveSeo({ title: "Servicios", description: "desc" });
    expect(seo.title).toBe("Servicios | NVPC");
  });

  it("keeps a title that already contains NVPC untouched", () => {
    const seo = resolveSeo({ title: "NVPC · Inicio", description: "desc" });
    expect(seo.title).toBe("NVPC · Inicio");
  });

  it("resolves a relative canonical against the site url", () => {
    const seo = resolveSeo({ title: "x", description: "y", canonical: "/tarifas/" });
    expect(seo.canonical).toBe("https://nvpc.es/tarifas/");
  });

  it("defaults noindex to false", () => {
    const seo = resolveSeo({ title: "x", description: "y" });
    expect(seo.noindex).toBe(false);
  });
});
