# The Word You'd Delete From the Dictionary

[![make.fun](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Rank](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/sosissausage35-collab/build-delete-word-dictionary/rank.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![Reward](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/sosissausage35-collab/build-delete-word-dictionary/reward.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)

Entry for the [make.fun bounty "The Word You'd Delete From the Dictionary"](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2) by [@sausage-sosis](https://make.fun).

## The word: `literally`

One word, erased from the dictionary forever: **literally**.

Why this word:

- The moment it is gone, every exaggerator loses their favourite word — nobody can ever say "I literally died" again.
- The joke is self-referential: "literally" is the word that marks literal truth, so erasing it means nothing can ever be said literally again. The humour comes from the word's own meaning and the gap it leaves, not from shock.
- It is fresher than the obvious picks ("moist", "phlegm") — a deletion whose comedy is the hole it leaves in everyday speech.

## How it works

`main.ts` (Node 22, no dependencies, fully deterministic) writes the word to `/output/entry.txt` and prints it to stdout. A regex guard enforces exactly one word of 1–77 letters, and the program reads the file back to verify it contains precisely that word — no trailing newline, no stray whitespace.

```sh
node main.ts
cat /output/entry.txt   # literally
```

## License

MIT — see [LICENSE](LICENSE).
