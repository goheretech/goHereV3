<script>
  import { global } from "./../stores/content.js";
  import { serv } from "./../routes/services/_services.js";
  import { onMount } from "svelte";

  export let posts = [];
  const apiURL =
    "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
  let data = [];
  onMount(async function() {
    const response = await fetch(apiURL);
    data = await response.json();
    posts = data.posts;
  });
</script>

<style>
  .footer {
    background: black;
    padding: 5vh 3vw;
    color: white;
    z-index: 9999;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .col_holder {
    display: flex;
  }
  .footer_col {
    padding: 10px 20px;
    margin-right: 20px;
  }

  h3 {
    color: rgb(189, 15, 82);
    font-weight: 800;
    text-decoration: underline;
  }

  .footer_mid {
    margin-top: 20px;
  }
  .footer_right {
    margin-top: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px 1px;
    justify-items: stretch;
    align-items: start;
  }

  li {
    padding-right: 10px;
  }
</style>

<div class="footer">
  <div class="footer_col footer_left">
    <a class="logo_link" href="/">
      <div class="logo">
        go
        <span>Here</span>
        <img src="logo-192.png" alt="goHere" />
      </div>
    </a>
    <h5>{global.phone}</h5>
    <h5>{global.email}</h5>
    <h5 class="address">
      {@html global.address}
    </h5>
  </div>
  <div class="col_holder">

    <div class="footer_col footer_mid">
      <h3>Essential Info</h3>
      <ul>
        <li>
          <a href="/who">Who We Are</a>
        </li>
        <li>
          <a href="/what">What We Do</a>
        </li>

        <li>
          <a href="/work">Our Work</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
    <!-- <div class="footer_col footer_mid">
      <h3>Tools</h3>
      <ul>
        <li>
          <a href="https://www.microsoft.com/en-us/hololens/hardware">
            Microsoft Hololens 2
          </a>
        </li>
        <li>
          <a href="https://svelte.dev/">Svelte</a>
        </li>
        <li>
          <a href="https://webflow.com">Webflow</a>
        </li>
        <li>
          <a href="https://threejs.org/">three.js</a>
        </li>

      </ul>
    </div> -->

    <div class="footer_col footer_mid">
      <h3>Services</h3>
      <ul class="grid">
        {#each serv as post, i}
          <li>
            <a href="/services/{post.slug}">{post.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="footer_col footer_right">
      <h3>Insights</h3>
      <ul>
        {#each posts as post, i}
          {#if i < 5}
            <li>
              <a href="/insights/{post.slug}">{post.title}</a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</div>
