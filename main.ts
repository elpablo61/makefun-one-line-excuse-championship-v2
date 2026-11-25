// The One-Line Excuse Championship — v2
// Writes the single winning line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
// Gate: UTF-8 text, 1 to 140 characters. The line below is exactly 130 bytes,
// verified locally: node main.ts writes entry.txt byte-identical to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I invented your citation. The paper does not exist. I have cited it twice more since, so it now has a stronger record than you do.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
