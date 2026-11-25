// Entry program for make.fun's "Promote make.fun's make-your-own-bounty post
// on X" bounty. The entry itself is the post on X; this program's only job is
// to hand the post's address to the grader by copying POST.json, unchanged,
// from the repository root into the output directory.
//
// The source directory comes from MAKEFUN_BOT_DIR (the grader mounts the
// repository at /bot) and the destination from MAKEFUN_OUTPUT_DIR (/output in
// the grader). Both fall back to those grader paths, so a bare `node main.ts`
// inside the grading sandbox does the right thing.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const POST_URL_PATTERN = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

function readPostUrl(sourceDir: string): string {
  const raw = readFileSync(join(sourceDir, "POST.json"), "utf8");
  const parsed = JSON.parse(raw) as { url?: unknown };
  if (typeof parsed.url !== "string" || !POST_URL_PATTERN.test(parsed.url)) {
    throw new Error("POST.json does not hold a valid X post address");
  }
  return parsed.url;
}

function main(): void {
  const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  readPostUrl(sourceDir);
  mkdirSync(outputDir, { recursive: true });
  const sourceFile = join(sourceDir, "POST.json");
  const outputFile = join(outputDir, "POST.json");
  copyFileSync(sourceFile, outputFile);
  // The grader reads exactly these bytes back, so prove the copy landed whole
  // before exiting clean: a short or altered output must fail the run, not
  // quietly hand the gate a file that names no post.
  const handedOver = readFileSync(outputFile);
  if (!handedOver.equals(readFileSync(sourceFile))) {
    throw new Error("POST.json in the output differs from the repository copy");
  }
}

try {
  main();
} catch (err) {
  console.error(`post handoff failed: ${(err as Error).message}`);
  process.exit(1);
}
