<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`services/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { serv: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let serv;
  import TransitionWrapper from "./../../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
  import { loaded } from "./../../stores/var.js";
  import CTA from "./../../components/CTA.svelte";
  import Hero from "./../../components/Hero.svelte";
  import Section from "./../../components/Section.svelte";
  import ServiceList from "./_ServiceList.svelte";
  import AltPage from "./_AltPage.svelte";
  import Bottom from "../../components/Bottom.svelte";

  let content = {
    title:
      '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> for .',
    p: "",

    button: "Make the connection",
    buttonHref: "cta",
    invert: true,
    color1: "red",
    color2: "purple",
    sub: "reach out",
    hero: ""
  };

  $: content = {
    title:
      '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> to ' +
      serv.section +
      ".",
    p: serv.desc,

    button: "Make the connection",
    buttonHref: "cta",
    invert: true,
    color1: "red",
    color2: "purple",
    sub: "reach out",
    hero: serv.name
  };

  onMount(() => {
    loaded.set(true);
    content = {
      title:
        '<span style="font-family:Arial;">go<b style="font-family:Arial;">Here</b></span> to ' +
        serv.section +
        ".",
      p: serv.desc,

      button: "Make the connection",
      buttonHref: "cta",
      invert: true,
      color1: "red",
      color2: "purple",
      sub: "reach out",
      hero: serv.name
    };
  });
</script>

<style>
  .heroish {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 85px;
    margin-top: 93px;
  }
  .content {
    font-size: 48px;
    margin: 0px 96px;
    margin-top: 64px;
    margin-bottom: 93px;
  }
</style>

<!-- <div class="fullServ">
  <div class="heroish">
    <h1>{serv.name}</h1>
  </div>
  <div class="content">
    {@html serv.desc}
  </div>
  <ServiceList />
</div>-->
<svelte:head>
  <title>{serv.mTitle}</title>
  <meta name="description" content={serv.mDesc} />
</svelte:head>
<TransitionWrapper>
  <Hero heading="" headingSub={content.hero} />

  <!-- {#if serv.detailed == true}
    <AltPage {serv}/>
{:else}
  <Section {...content}/>
{/if} -->

  <Section {...content} />

  <ServiceList />

  <CTA />
</TransitionWrapper>
