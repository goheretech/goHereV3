<script context="module">
  export function preload({ params, query }) {
    return this.fetch("sitemap.xml");
  }
</script>

<script>
  import { home } from "./../stores/content.js";
  import { fade } from "svelte/transition";
  import Section from "./../components/Section.svelte";
  import SectionNew from "./../components/Section.svelte";
  import Hero from "./../components/Hero.svelte";
  import Nav from "../components/Nav.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  import Index from "./../components/space.js";
  import CTAOverlay from "./../components/CTAOverlay.svelte";
  import { onMount, onDestroy } from "svelte";
  import RandomText from "./../components/RandomText.svelte";
  import { showingCTA, scrollPer, loaded } from "./../stores/var.js";
  import Bottom from "./../components/Bottom.svelte";
  import SvelteSeo from "svelte-seo";

  export let phase = 0;
  let displayMenu = false;

  function toggleMenu() {
    displayMenu = !displayMenu;
  }
  function closeMenu() {
    displayMenu = false;
  }
  let topSec, midSec, bottomSec;
  onMount(() => {
    var createScene = new Promise((resolve, reject) => {
      let create3d = new Index();
      resolve(create3d);
    });
    createScene;
    window.addEventListener("scroll", fadeScroll);

    return () => {
      phase = 0;
      window.removeEventListener("scroll", fadeScroll, false);
    };
  });

  function fadeScroll() {
    //Get percent scrolled
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var y = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    if (y < 3) {
      phase = 0;
    } else if (y > 42 * 0.43 && y < 54 * 0.43) {
      phase = 1;
    } else if (y > 99.1 * 0.43 && y < 110 * 0.43) {
      phase = 3;
    } else {
      phase = 0;
    }
  }
  function lerp(min, max, value) {
    return (max - min) * value + min;
  }
  function removeEl() {
    phase = 0;
    displayMenu = false;
  }

  function displayCTA() {
    showingCTA.set(true);
  }
</script>

<style>
  canvas {
    position: fixed;
    z-index: 1;
    top: 0;
  }
  .buff {
    min-height: 100px;
  }

  .buff_section {
    height: 110vh;
  }
  .buff_section:last-child {
    height: 90vh;
  }
  .fixed_section {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: 4;
    padding-top: 120px;
  }
  .bottom {
    margin-bottom: -80px;
  }
  .bottom .section_inner {
    margin-bottom: -20px;
  }

  .clear {
    min-height: 100vh;
    color: white;
  }

  .clear a {
    margin-top: 0;
    margin-bottom: -10px;
  }
  .container.left {
    align-items: flex-start;
    min-width: 800px;
    max-width: 65%;
  }
  .left {
    width: 100%;
    padding: 2vw;
  }
  .left h2 {
    text-align: left;
    margin-left: 0;
  }
  .left p {
    text-align: left;
    font-size: 3vw;
  }

  .frame_track {
    height: 100%;
  }
  .frame {
    position: sticky;
    z-index: 2;
    top: 0;
    /* height:100vh; */
    width: 100vw;
  }
  .clear_inner.left {
    justify-content: flex-start;
    padding-left: 10vw;
  }

  @media (max-width: 1068px) {
    .container.left {
      padding-right: 10vw;
      min-width: 0;
      max-width: 90%;
      margin-left: 0;
    }
    .clear_inner.left {
      justify-content: center;
      padding-left: 0;
    }
  }
</style>

<svelte:head>
  <title>{home.title}</title>
  <meta name="description" content={home.metaDesc} />
</svelte:head>
<SvelteSeo
  openGraph={{ title: home.title, description: home.metaDesc, 
    url: 'https://www.gohere.tech', 
    type: 'website', images: [{ url: 'https://gohere.ghost.io/content/images/2021/02/3d-logo.png', alt: 'goHere® Logo - Mixed Reality - Augment Your Reality™' }] }} />
<nav style="position:fixed; top:0;">
  <a class="logo_link" href="." on:click={closeMenu}>
    <div class="logo">
      go
      <span>Here</span>
      <img src="logo-40.png" alt="goHere" />
    </div>
    <RandomText />
  </a>
  <ul class:nav-active={displayMenu}>
    <li class:act={displayMenu}>
      <a on:click={removeEl} href="who">about us</a>
    </li>
    <li class:act={displayMenu}>
      <a on:click={removeEl} href="what">what we do</a>
    </li>
    <li class:act={displayMenu}>
      <a on:click={removeEl} href="work">our work</a>
    </li>
    <li class:act={displayMenu}>
      <a on:click={removeEl} href="contact">contact</a>
    </li>
    <li class:act={displayMenu}>
      <a rel="prefetch" on:click={removeEl} href="insights">insights</a>
    </li>
  </ul>
  <div class="burger" class:toggle={displayMenu} on:click={toggleMenu}>
    <div class="line1" />
    <div class="line2" />
    <div class="line3" />
  </div>
</nav>
<canvas id="canvas" />
<TransitionWrapper>

  <div class="frame_track">

    <div class="frame">
      {#each home.sections as section, i}
        {#if i % 2 == 1 && i < 3}
          {#if phase == i}
            <section
              class="section fixed_section"
              id="sec-{i}"
              transition:fade={{ duration: 300 }}
              class:border_color={!section.clear}
              class:clear={section.clear}
              class:invert={section.invert}
              class:bottom={section.bottom}>
              <div
                class:clear_inner={section.clear}
                class:section_inner={!section.clear}
                class:invert={section.invert}
                class:left={section.left}>

                <div
                  class="container"
                  class:inner={!section.clear}
                  class:left={section.left}>
                  {#if section.sub != ''}
                    <h5>
                      <span>
                        {@html section.sub}
                      </span>
                    </h5>
                  {/if}
                  <h2 class:colorDynamic={section.invert} data-glow="">
                    {@html section.title}
                  </h2>
                  <p>
                    {@html section.p}
                  </p>
                  {#if section.button != ''}
                    <button
                      class="button colorRotate"
                      on:click={displayCTA}
                      style="background: linear-gradient(180deg, rgba(255, 255,
                      255, 0.35) 0%, rgba(135, 135, 135, 0) 46.87%, rgba(0, 0,
                      0, 0.26) 100%), linear-gradient(106.98deg, {section.color1},
                      {section.color2});">
                      {section.button}
                    </button>
                  {/if}
                </div>
              </div>
            </section>
          {/if}
        {/if}

        <!--- Button Section -->
        <!-- {#if i == 3}
          {#if phase == i}
            <section
              class="section fixed_section"
              id="sec-{i}"
              transition:fade={{ duration: 300 }}
              class:clear={section.clear}
              class:bottom={section.bottom}>
              <div
                class:clear_inner={section.clear}
                class:section_inner={!section.clear}
                class:invert={section.invert}
                class:left={section.left}>

                <div
                  class="container"
                  class:inner={!section.clear}
                  class:left={section.left}>
                  <button class="button cta" on:click={displayCTA}>
                    {section.button}
                  </button>
                </div>

              </div>
            </section>
          {/if}
        {/if} -->
      {/each}
    </div>

    <div class="buff" />
    <Hero heading={home.h1} headingSub={home.h1Sub} color={false} />
    {#each home.sections as section, i}
      {#if i % 2 != 1}
        <section
          class="section"
          id="sec-{i}"
          transition:fade={{ duration: 300 }}
          class:border_color={!section.clear}
          class:clear={section.clear}
          class:invert={section.invert}
          class:bottom={section.bottom}
          class:left={section.left}>
          <div
            class:clear_inner={section.clear}
            class:section_inner={!section.clear}
            class:invert={section.invert}>
            <div
              class="container"
              class:inner={!section.clear}
              class:left={section.left}>
              {#if section.sub != ''}
                <h5>
                  <span>
                    {@html section.sub}
                  </span>
                </h5>
              {/if}
              <h2 class:colorDynamic={section.invert} data-glow="">
                {@html section.title}
              </h2>
              <p>
                {@html section.p}
              </p>
              {#if section.button != ''}
                <a
                  class="button colorRotate"
                  href={section.buttonHref}
                  style="background: linear-gradient(180deg, rgba(255, 255, 255,
                  0.35) 0%, rgba(135, 135, 135, 0) 46.87%, rgba(0, 0, 0, 0.26)
                  100%), linear-gradient(106.98deg, {section.color1}, {section.color2});">
                  {section.button}
                </a>
              {/if}
            </div>
          </div>
        </section>
        {#if i == 0}
          <div class="buff buff_section" />
        {/if}
      {/if}
    {/each}
  </div>
  <div class="above" style="position:relative; z-index:5;">
    <Bottom />
  </div>
</TransitionWrapper>
