<script>
  import { onMount } from "svelte";
  import { blur, fade } from "svelte/transition";
  import { loaded } from "./../stores/var.js";

  let show = true;
  let b;

  let showButton = false;
  let newP = 5;
  onMount(() => {
    b = document.getElementById("perc");
    requestAnimationFrame(aniamteLoad);
    reload();
  });

  $: if ($loaded == true) {
    // alert("loaded");
    show = false;
  } else {
    show = true;
    // alert('its clsoed');
  }

  function aniamteLoad() {
    if (newP < 80) {
      newP += 1;
    }
    if (newP >= 80 && newP < 100) {
      newP += 0.5;
    }
    b.style.width = newP + "%";
    requestAnimationFrame(aniamteLoad);
  }

  function reload() {
    setTimeout(function() {
      if ($loaded != true) {
        showButton = true;
      }
    }, 1000);
  }

  function skipLoad() {
    loaded.set(true);
  }
</script>

<style>
  .load {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
    background: linear-gradient(
      172deg,
      rgba(223, 255, 248, 1) 0%,
      rgba(218, 184, 249, 1) 100%
    );
    /* background-image: url("https://gohere2-f295.kxcdn.com/img/gif/loading2.gif"); */
    background-size: cover;
    background-position: center;
    /* animation: color_rotate 20ms infinite; */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bar {
    width: 400px;
    max-width: 90vw;
    height: 5px;
    background: transparent;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.07);
    border-radius: 2px;
    position: relative;
  }
  #perc {
    width: 5%;
    height: 100%;
    background: white;
    border-radius: 2px;
  }

  .bt {
    position: absolute;
    font-size: 22px;
    color: white;
    z-indx: 10000;
  }
</style>

{#if show}
  <div out:fade={{ duration: 300 }} class="load colorRotate">
    <!-- <div class="container22">
      <div class="circle circle1" />
      <div class="circle circle2" />
    </div>
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stfDeviation="10" />
        <feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10 " />
      </filter>
    </svg> -->

    <div class="bar">
      <div id="perc" class="colorRotate" />
      {#if showButton == true}
        <button id="bt" on:click={skipLoad}>Skip</button>
      {/if}
    </div>
  </div>
{/if}
<div in:fade={{ delay: 300, duration: 500 }}>
  <slot />
</div>
