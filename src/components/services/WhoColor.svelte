<script>
  import { values } from "./../../stores/values.js";
  import { fade } from "svelte/transition";
  import CTA from "./../../components/CTA.svelte";
  import { showingCTA, scrollPosition } from "./../../stores/var.js";
  import { onMount } from "svelte";
  let show = true;
  let number = 0;

  let index;
  let offset;
  let progress;

  function getPosition(e) {
    var offset = { x: 0, y: 0 };
    while (e) {
      offset.x += e.offsetLeft;
      offset.y += e.offsetTop;
      e = e.offsetParent;
    }

    if (
      document.documentElement &&
      (document.documentElement.scrollTop ||
        document.documentElement.scrollLeft)
    ) {
      offset.x -= document.documentElement.scrollLeft;
      offset.y -= document.documentElement.scrollTop;
    } else if (
      document.body &&
      (document.body.scrollTop || document.body.scrollLeft)
    ) {
      offset.x -= document.body.scrollLeft;
      offset.y -= document.body.scrollTop;
    } else if (window.pageXOffset || window.pageYOffset) {
      offset.x -= window.pageXOffset;
      offset.y -= window.pageYOffset;
    }

    return offset.y;
  }

  let framePosition, slides, frameE, frameL;

  onMount(() => {
    frameE = document.getElementById("railr");
    framePosition = getPosition(frameE);
    slides = document.getElementsByClassName("windowr");
    window.addEventListener("scroll", moveSlides);

    return () => {
      window.removeEventListener("scroll", moveSlides, false);
    };
  });

  function moveSlides() {
    framePosition = getPosition(frameE) - window.innerHeight;
    frameL = frameE.offsetHeight;
    let framePerc = (-1 * (framePosition * 100)) / frameL;

    [].forEach.call(slides, function(slide, i) {
      let trans = -4 * framePerc + 100 * (i + 1);
      if (trans < 0) {
        trans = 0;
      }
      slide.style.transform =
        "translateX(" +
        trans +
        "vw) scale(" +
        (1 - (values.length - i) / 100) +
        ")";
    });
  }
</script>

<style>
  #railr {
    width: 100vw;
    height: 300vh;
    position: relative;
  }
  .windowr {
    position: absolute;
    top: 120px;
    /* height: 75vh; */
    margin-top: -80px;
    right: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    background: rgba(0, 0, 0, 0.95);
    border-left: 10px white solid;
    border-top: 10px white solid;
    border-bottom: 10px white solid;
    box-shadow: -8px 0px 4px rgba(255, 255, 255, 0.1),
      inset 8px 0px 4px rgba(3, 3, 3, 0.082);

    border-radius: 11px 0px 0px 11px;
  }

  .mainBox {
    padding: 50px 75px;
    margin-left: 100px;
    width: 50%;
    position: relative;
  }
  .blackBox {
    padding: 50px 75px;

    width: 50%;
    /* background: #FDFAF5; */
    /* border: 6px solid #FFFFFF; */
    /* box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3), inset 4px 4px 8px rgba(0, 0, 0, 0.2), inset -4px -2px 4px #FFFFFF; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
  }

  h2 {
    font-size: 5vw;
    padding-bottom: 20px;
    font-weight: 700;
    line-height: 110%;
  }

  h4 {
    font-size: 3vw;
    padding-bottom: 20px;
    line-height: 1;
  }
  h6 {
    padding-right: 60px;
  }
  .number {
    position: absolute;
    top: 40px;
    left: -50px;
    font-size: 170px;
    color: rgba(255, 255, 255, 0.1);
    font-weight: 800;
    font-family: "Roboto", sans-serif;
    line-height: 100%;
    text-align: right;
  }
  p {
    font-size: 35px;
    /* padding-bottom: 25px; */
    font-weight: 500;
    color: #888;
  }

  .holder {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .qmark {
    font-size: 20vw;
    position: absolute;
    opacity: 0.1;
    color: white;
    top: -50%;
    left: -5%;
  }
</style>

{#if show}
  <div id="railr">
    <div class="holder">
      {#each values as value, i}
        <div
          class="windowr colorScrollAlt"
          style=" left:{i * 20 - 25}px; background:{value.color};">
          <div class="mainBox">
            <h4
              class="number"
              style="color:{value.color1}; text-shadow: -2px -2px 4px {value.color2};">
              {i + 1}
            </h4>
            <h2>{value.heading}</h2>
            <p style="color: rgba(228, 228, 228, 0.8);">

              {@html value.p}
            </p>
          </div>
          <div class="blackBox" style="color:{value.color1}">
            <span class="qmark">"</span>
            <h4>{value.quote}</h4>
            <h6>{value.author}</h6>

          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
