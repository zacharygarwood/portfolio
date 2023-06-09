---
title: Flounder
tags: Chess Engine, Rust
date: "2023-06-06"
description: "UCI compatible chess engine written in Rust. In the beginning it had a fitting name (it wasn't good), but now can consistently beat it's creator. You can challenge me on lichess @FlounderBot."
---

<img alt="Flounder's Best Game" src="/assets/flounders-best-game.gif" width="400" height="400" />

Note: My favorite game. Playing as the black pieces.


### Introduction
Flounder is a UCI (Universal Chess Interface) compatible chess engine written in Rust. Despite its unassuming name, Flounder has grown into a serious competitor (~1800 ELO), consistently outperforming its own creator. If you are up to the test, you can challenge it on Lichess <a href="https://lichess.org/@/FlounderBot" class="link" target="_blank">@FlounderBot</a>! 
Just a heads up, Flounder may be busy competing against other bots or offline.

### Why did I make it
I had read many great things about Rust online, specifically that it was the <a href="https://survey.stackoverflow.co/2022/#technology-most-loved-dreaded-and-wanted" class="link" target="_blank">most loved programming language</a> in 2022, and that it had performance similar to C++. I have worked with manual and automatic memory mangement languages like C and Python respectively, but the concept of ownership in Rust was new to me and made it the logical next thing to learn.

Back in 2020, I began playing chess and might have gotten slightly addicted. With this love for chess and desire to learn Rust, I decided making a chess engine would be a fun endeavor.

### Development
Flounder's development involved implementing a variety of algorithms and techniques. It uses methods like <a href="https://www.chessprogramming.org/Bitboards" class="link" target="_blank">bitboards</a> and <a href="https://www.chessprogramming.org/Magic_Bitboards" class="link" target="_blank">magic bitboards</a> to efficiently represent the board and generate legal moves. Various search techniques such as <a href="https://www.chessprogramming.org/Alpha-Beta" class="link" target="_blank">negamax with alpha-beta pruning</a>, <a href="https://www.chessprogramming.org/Quiescence_Search" class="link" target="_blank">quiescence search</a>, and <a href="https://www.chessprogramming.org/Iterative_Deepening" class="link" target="_blank">iterative deepening</a> are implemented to improve the search efficiency and strengthen play. Flounder uses <a href="https://www.chessprogramming.org/PV-Move" class="link" target="_blank">PV-Move</a>, <a href="https://www.chessprogramming.org/Hash_Move" class="link" target="_blank">Hash Move</a>, and <a href="https://www.chessprogramming.org/MVV-LVA" class="link" target="_blank">MVV-LVA</a> move ordering to prioritize moves that are likely to be the best in a given position. This greatly reduces the total number of positions that need to be evaluated as it prunes large portions of the game tree. 

Evaluating positions is done quickly with the use of <a href="https://www.chessprogramming.org/Piece-Square_Tables" class="link" target="_blank">piece square tables</a> and <a href="https://www.chessprogramming.org/Material" class="link" target="_blank">material counting</a>. The evaluation of positions and their corresponding best moves are stored in a <a href="https://www.chessprogramming.org/Transposition_Table" class="link" target="_blank">transposition table</a> implemented with <a href="https://www.chessprogramming.org/Zobrist_Hashing" class="link" target="_blank">Zobrist hashing</a>. This enables Flounder to store and retrieve previously evaluated positions quickly.

### Future Work
Before developing Flounder, I read online that many people wouldn't recommend building a chess engine as it is a project that never feels complete. Now, I disagree with not recommending people to build a chess engine as I learned a lot during the process, but I completely agree in terms of it not feeling complete (hence this section).

At the moment, Flounder's Achilles' heel is that it doesn't understand what a <a href="https://en.wikipedia.org/wiki/Threefold_repetition" class="link" target="_blank">threefold repetition</a> is. This lack of knowledge often leads it to draw in positions where it is clearly winning, and it is the next thing on my list to implement.

Afterwards, there are many optimizations that can still be made like switching to <a href="https://www.chessprogramming.org/Principal_Variation_Search" class="link" target="_blank">Principal Variation Search</a> over Negamax for search. There are other techniques yet to be implemented like null move pruning, late move reductions, and the killer move hueristic to further improve performance allowing for Flounder to search to greater depths.

Lastly, Flounder only searches at a fixed depth as of right now. This isn't a big issue as it already plays pretty fast, and is why it is probably the last thing I'll implement. To allow it to search at greater depths, I'm going to add in some sort of time management allowing it to search while the opponent is thinking. Because it has more time to search, it will be able to search to higher depths. This will also help to avoid flagging in the rare scenarios that it does.

#### Thanks for reading!

<style>
    .link {
        color: #0000FF;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>