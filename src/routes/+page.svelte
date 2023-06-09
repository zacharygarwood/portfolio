<script>
  let showGif = false;

  function rickRoll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  function toggleGif() {
    showGif = !showGif;
  }
</script>

<div>
  <div class="title">
    <h1>Howdy!</h1>
    {#if showGif}
      <img
        src="/assets/easter-egg.gif"
        alt="GIF"
        class="emoji-image"
        on:click={rickRoll}
      />
      <div class="easter-egg">Click me!</div>
    {:else}
      <img
        src="/assets/cowboy.png"
        alt="Cowboy"
        class="emoji-image"
        on:click={toggleGif}
      />
    {/if}
  </div>

  <div>
    <p>
      <img src="/assets/me.jpg" alt="Me" class="profile-image" />
    </p>
    <p>
      I'm Zach Garwood, nice to meet you! Somehow you have stumbled upon my
      little corner of the internet, and I welcome you to look around!
    </p>

    <p>If you are in a rush, here's a little about me:</p>

    <ul>
      <li>Software engineer looking for new an exciting opportunities</li>
      <li>Interned at Amazon and Principal Financial Group</li>
      <li>Graduated from Iowa State University in May 2023</li>
      <li>Skills: Python, Java, Rust, C, C++, SQL, Javascript, HTML, CSS</li>
    </ul>

    <p>If you think I'm a good fit for your company feel free to reach out!</p>
  </div>
</div>

<style>
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .profile-image {
    width: 200px;
    height: auto;
  }

  .emoji-image {
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .easter-egg {
    font-size: 1rem;
    font-weight: normal;
  }
</style>
