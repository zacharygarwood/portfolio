---
title: Valorant Scraper
tags: Java, Python, Selenium, Pyplot, Data Analysis
date: "2021-10-15"
description: "Gathers statistics on players that I played with to determine if there was a correlation between ranks and certain statistics."
---

### Introduction
Valorant Scraper is a web scraping application designed for the popular video game Valorant (who would've guessed). It gathers statistics from people I played with and stores the cleaned data into a CSV. This data was then used to create a variety of visualizations to gain insight that you can find below!

### Why did I make it
I've always been an FPS guy when it comes to gaming. Back when I worked on this project, Valorant was just coming out and I had a blast playing it with friends. I found the ranking system very interesting, and I became curious as to how the rank was determined for a player. I thought it would be fun to scrape statistics from people I played with, and then graph the data against the player's rank to see if there was any correlation. 

### Development
Valorant Scraper was created in Java and used Selenium to scrape the relevant player information. All of the information was obtained from <a href="https://tracker.gg/valorant" class="link" target="_blank">Tracker.gg</a>. Below is the process I took to scrape all the information:
- Gather all the games I played up until a certain date
- Get all the players in those games 
- Go to each player's account and gather the reveleant statistics
- Clean up the data and remove any duplicates
- Store the resulting information into a CSV

After these steps the result was a CSV that looked something like this:

<table class="table">
  <tr>
    <th>Username</th>
    <th>Rank</th>
    <th>HS%</th>
    <th>DPR</th>
    <th>Win%</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>aimbotcardin</td>
    <td>Immortal</td>
    <td>26</td>
    <td>138.5</td>
    <td>52.6</td>
    <td>01/21/21</td>
  </tr>
  <tr>
    <td>Datho</td>
    <td>Immortal</td>
    <td>23</td>
    <td>119.7</td>
    <td>50.0</td>
    <td>02/06/21</td>
  </tr>
  <tr>
    <td>Goku</td>
    <td>Immortal</td>
    <td>26</td>
    <td>134.2</td>
    <td>50.9</td>
    <td>01/18/21</td>
  </tr>
</table>

With this data came the fun part... graphs!

<img alt="Correlation Matrix" src="/assets/valorant-scraper/correlation-matrix.png" width="100%" height="100%" style="margin-right: 20px"/>
Note: Shows the correlations between all the different statistics. The largest correlation with the rank came from the headshot percentage which had a correlation of 0.79.

<img alt="Pairplot" src="/assets/valorant-scraper/pairplot.png" width="100%" height="100%" style="margin-right: 20px"/>
Note: Pairplot that visualizes all the data where the colors are the different ranks. Didn't get much out of this graph but thought it looked really cool.

<img alt="HS % vs Rank" src="/assets/valorant-scraper/hs_per_vs_rank.png" width="100%" height="100%" style="margin-right: 20px"/>
Note: Scatter plot showing headshot percentage on the y-axis and the rank number (0 = lowest rank, 15 = highest rank) on the x-axis.

I also made scatter plots for the statistics DPR (Damage per Round), KPR (Kills per Round), SPR (Score per Round), KD (Kill/Death Ratio), and Win percentage all of which were plotted against the rank like the graph above. I'm not showing those graphs as they did not have any significant correlation. All of the graphs were created in Python with the help of <a href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" class="link" target="_blank">pyplot</a>.

In the end, I found that headshot percentages had the highest correlation with the ranks. This makes sense as the better one can aim, in a game focused around aiming, the higher the rank they will achieve. Even though this finding wasn't groundbreaking, I had a fun time during the process, and it was interesting to see how certain statistics could impact one's rank in Valorant. 


### Future Work
I'm not sure I'll get around to implementing it, but it would have been really cool to have some sort of GUI to generate and display all the graphs after scraping the data. Other than that, I am content with where the project ended up.

#### Thanks for reading!

<style>
  img {
    margin-top: 2rem;
  }

  .link {
    color: #0000FF;
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }

  .table {
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }

  .table th,
  .table td {
    border: 1px solid black;
    padding: 8px;
  }

  @media (max-width: 600px) {
    .table th,
    .table td {
      font-size: 12px;
      padding: 6px;
    }
  }

</style>