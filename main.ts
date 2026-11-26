// One-Liner Laughs — make.fun entry (u-coral-404-one-liner-laughs-aa872d41)
//
// Writes a single joke (at most 200 characters) to /output/entry.txt.
// The line was picked by internal pairwise selection plus a mock-judge trial
// against the winner artifacts of the same-kind finalized bounty
// "The One-Line Laugh" (see mock-judge.md in the build folder).
// Two-beat structure with the reveal in the final clause:
//   beat 1 — buried the goldfish (mundane ritual)
//   beat 2 — my son dug it up to check if heaven had Wi-Fi (escalation)
//   reveal — "why I lied about the farm too" (a second lie exposed)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I buried my goldfish in the garden, and my son dug it up to check if heaven had Wi-Fi, then asked me why I lied about the farm too.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written so a truncated or failed write fails loudly
// here instead of shipping an invalid entry to the gate.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the line");
}
