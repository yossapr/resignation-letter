// make.fun entry: write the resignation letter to the directory the site reads.
// The line is the entry. It is short on purpose; a letter that explains itself is not a resignation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The oldest excuse, told straight, then answered honestly by the people who lived it.
const ENTRY = "I'm resigning to spend more time with my family. They've forgotten what I look like. They say hi.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(ENTRY);
