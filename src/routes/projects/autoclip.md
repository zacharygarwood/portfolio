---
title: Autoclip
tags: Python, Selenium, Twitch API, Automation
date: "2021-07-18"
description: "Automated program that gathers the top Twitch clips of the day, edits them together, and posts them to YouTube. Accumulated over 16,000 views."
---

### Introduction:

Autoclip is a program designed to automate the process of posting popular clips from Twitch to YouTube. Since creation, Autoclip has gathered over 16,000 views!

Note: Autoclip is no longer posting videos as I don't want to run into any copyright issues 😅, but it was fun while it lasted! 

### Why did I make it
When scrolling through YouTube, I realized that a lot of the videos that were being recommended to me involved short clips from Twitch streamers that I watched. I thought to myself, "If I am getting recommended this type of video, then other people are as well. Might as well automate the process of creating these videos and see what happens!" 

### Development

Autoclip uses the <a href="https://dev.twitch.tv/docs/api/" class="link" target="_blank">Twitch API</a> to gather the top clips over a given timeframe. It edits the clips together using <a href="https://pypi.org/project/moviepy/" class="link" target="_blank">moviepy</a>, and posts them to YouTube with the use of <a href="https://www.selenium.dev/" class="link" target="_blank">Selenium</a>. I initially used the <a href="https://developers.google.com/youtube/v3/docs
" class="link" target="_blank">YouTube API</a> to post the videos, but quickly ran into rate limiting issues leading me to use Selenium.

Information about the clips like the time it occurs during the video, the title of the clip, and the streamer that it was from are put in the description for those watching to have easy access to the sources.

### Future Work

Even though Autoclip is no longer running, there is still some work that could be done to improve it. 

- The videos could be edited more to include pop up banners of the streamers whose clips are being shown. 
- YouTube videos are often edited so that the streamer's facecam is fullscreen during reactions, and adding in this feature could improve the viewing experience.

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