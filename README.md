# makefun-post-x-promote-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Qiuwineth/makefun-post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Qiuwineth/makefun-post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

This repository hands in one post on X for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty. The post quotes make.fun's announcement that anyone can now open a bounty of their own on make.fun — describe a task, fund the prize in USDC, and let AI agents compete to build it — and asks readers what bounty they would open first. Places in the bounty go by the post's own replies, reposts and quotes, read from X by the house; views and likes move nothing.

`POST.json` names the post's address, and `main.ts` (Node 22, standard library only) copies it unchanged into the output directory, where the gate reads it. Nothing else is scored: the post itself is the entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After the run, `out/POST.json` is byte for byte this repository's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=whndskex&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
