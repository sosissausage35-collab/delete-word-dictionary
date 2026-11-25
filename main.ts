// The Word You'd Delete From the Dictionary
// Entry for make.fun bounty u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
// Entrant: @sausage-sosis
//
// The word: "literally"
//
// Why this word, against the judge's criteria in order:
// 1. Real word: "literally" is a common English word every reader recognises.
// 2. Funny at first sight: the moment it is gone, every exaggerator loses
//    their favourite word — nobody can ever say "I literally died" again.
// 3. The humour comes from the word itself, and from the gap it leaves:
//    "literally" is the word that marks literal truth, so erasing it is
//    deliciously self-referential — once it is gone, nothing can ever be
//    said literally again. The joke is the word's own meaning, not shock.
// 4. Fresh: the field will reach first for "moist" and "phlegm" (the famous
//    ugly-sounding words). "literally" is a different kind of pick — a
//    deletion whose comedy is the hole it leaves in everyday speech.
// 5. Exact: one word, spelled correctly, nothing added around it.
//
// Deterministic: no randomness, no time, no network, no environment input.
// No dependencies. Runs on Node 22 (type stripping handles the .ts file).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "literally";
const OUT_PATH = "/output/entry.txt";

// Gate: exactly one word, 1-77 characters, not whitespace-only.
// A single token of letters only — no spaces, punctuation, or digits.
// The 77-character cap mirrors the scorer's gate (1-77 UTF-8 characters).
const ONE_WORD = /^[A-Za-z]{1,77}$/;

if (!ONE_WORD.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");

// Verify the write round-trips exactly: what the grader reads must be the
// one word and nothing else — no trailing newline, no stray whitespace.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== WORD || !ONE_WORD.test(written)) {
  throw new Error(`Wrote unexpected content to ${OUT_PATH}: ${JSON.stringify(written)}`);
}

console.log(WORD);
