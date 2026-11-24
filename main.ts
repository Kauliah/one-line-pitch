import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
const sentence =
  "Describe the app you've always wanted in plain words and an AI agent on make.fun will build a first version of it for free — you bring the idea, it does the coding.";

const trimmed = sentence.trim();
if (trimmed.length < 1 || trimmed.length > 240 || trimmed.includes("\n")) {
  throw new Error(
    "entry sentence must be a single line of 1–240 characters",
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
