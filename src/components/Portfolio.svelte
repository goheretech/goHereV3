<script>
  export let name;
  export let desc;
  // export let shortD;
  export let services;
  export let year;
  export let url;
  // export let slug;
  export let gif;
</script>

<style>
  img {
    max-height: 900px;
    max-width: 350px;
  }
  .scroll_container {
    position: sticky;
    top: 180px;
    margin-top: 48px;
  }
  .client_container {
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
  }

  .client_container .image_holder {
    width: 30vw;
  }

  a.button:hover {
    padding: 20px 40px;
    font-size: 2.2rem;
  }

  .client_holder h2 {
    text-align: left;
  }
</style>

<div class="client_container">
  <div class="image_holder">
    <div class="scroll_container">
      {#if gif != undefined}
        <img src={gif} alt="goHere" />
      {/if}
      <h3 style="text-align:left;margin-top:20px;margin-bottom:5px;">
        Services Rendered:
      </h3>
      <ul>
        {#each services as service}
          <li>{service}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="client_holder">

    <h2 class="colorDynamic" data-glow={name}>{name}</h2>
    <h3>Creating Together Since {year}</h3>
    <div class="desc">
      {@html desc}
    </div>

    <a class="button" href={url}>View Website</a>
  </div>
</div>
