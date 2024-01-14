<script>
  import { asciiArtMappings } from './../data/ascii.js';

  let currentArtIndex = 0;
  let currentAsciiArt = asciiArtMappings[currentArtIndex].ascii;
  let currentAsciiLink = asciiArtMappings[currentArtIndex].link;

  function cycleArt() {
    currentArtIndex = (currentArtIndex + 1) % asciiArtMappings.length;
    currentAsciiArt = asciiArtMappings[currentArtIndex].ascii;
    currentAsciiLink = asciiArtMappings[currentArtIndex].link;
  }
</script>

<div class="main-container">
  <div class="sub-container">
    <h1>zach garwood</h1>
    <div class="subtext">
      <p>howdy! welcome to my corner of the internet, feel free to look around :)</p>
      <p>
        current swe @ <a href="https://amazon.com" class="link" target="_blank">amazon</a> /
        previous swe intern @ <a href="https://amazon.com" class="link" target="_blank">amazon</a>, <a href="https://principal.com" class="link" target="_blank">principal</a>
      </p>
      <p>software engineering graduate @ <a href="https://www.iastate.edu/" class="link" target="_blank">iowa state</a></p>
    </div>
  </div>

  <div class="sub-container">
    <div>
      <h3>interests</h3>
      <div class="subtext">
        [ <span class="highlight">backend</span> /
        <span class="highlight">infra</span> /
        <span class="highlight">security</span> /
        <span class="highlight">distributed computing</span> ]
      </div>
    </div>
    <div>
      <h3>projects</h3>
      <div class="subtext">
        [ <a href="https://lichess.org/@/FlounderBot" class="link" target="_blank">flounder</a> /
        <a href="https://github.com/zacharygarwood/Autoclip" class="link" target="_blank">autoclip</a> /
        <a href="https://github.com/zacharygarwood/Valorant-Scraper" class="link" target="_blank">valorant scraper</a> ]
      </div>
    </div>
    <div>
      <h3>links</h3>
      <div class="subtext">
        [ <a href="https://github.com/zacharygarwood" class="link" target="_blank">github</a> /
        <a href="https://linkedin.com/in/zachary-garwood/" class="link" target="_blank">linkedin</a> /
        <a href="mailto:garwoodzachary@gmail.com" class="link" target="_blank">email</a> /
        <a href="/assets/zachary_garwood_resume.pdf" class="link" target="_blank">resume</a> /
        <a href="https://zacharygarwood.com" class="link" target="_blank">recursion</a> ]
      </div>
    </div>
  </div>

  <div class="magic">
    <span class="magic-text">✨</span> <span class="link" on:click={cycleArt}>magic</span> <span class="magic-text">✨</span>
  </div>
</div>

<marquee class="marquee-container" behavior="alternate" scrollamount="5">
  <marquee class="marquee-child" behavior="alternate" scrollamount="5" direction="down">
      <a href={currentAsciiLink} class="ascii" target="_blank">
        <pre>{currentAsciiArt}</pre>
      </a>
  </marquee>
</marquee>


<style>
  .main-container {
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    position: relative; 
    z-index: 1;
  }

  .sub-container {
    margin-bottom: 3rem;
  }

  .magic {
    text-align: center;
  }

  .magic-text {
    animation: magic-fade 2s infinite;
  }

  .subtext {
    color: #D9dad7;
  }

  .link {
    color: #FFA500;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }
  
  .ascii {
    color: #979f83; 
    transition: color 1s ease; 
    text-decoration: none;
    display: inline-block;
  }

  pre {
    width: fit-content;
    margin: 0;
  }

  .marquee-container {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .marquee-child {
    height: 100vh;
    width: fit-content;
  }

  @keyframes magic-fade{
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
