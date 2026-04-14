import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Project scaffolding", () => {
  const root = path.resolve(__dirname, "../..");

  it("has the expected folder structure", () => {
    const dirs = [
      "src/components",
      "src/lib/db",
      "src/lib/seed",
      "src/lib/tcg-api",
      "src/lib/animations",
      "src/hooks",
    ];
    for (const dir of dirs) {
      expect(fs.existsSync(path.join(root, dir))).toBe(true);
    }
  });

  it("has tailwind theme colors configured", () => {
    const css = fs.readFileSync(
      path.join(root, "src/app/globals.css"),
      "utf-8"
    );
    expect(css).toContain("--color-snorlax-body");
    expect(css).toContain("--color-pokeball-red");
    expect(css).toContain("--color-dex-cyan");
  });

  it("has required dependencies installed", () => {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(root, "package.json"), "utf-8")
    );
    expect(pkg.dependencies["framer-motion"]).toBeDefined();
    expect(pkg.dependencies["drizzle-orm"]).toBeDefined();
    expect(pkg.dependencies["@libsql/client"]).toBeDefined();
    expect(pkg.devDependencies["vitest"]).toBeDefined();
  });
});
