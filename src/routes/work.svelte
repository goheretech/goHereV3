<script>
  import clients from "./../stores/clients.js";
  import Section from "./../components/Section.svelte";
  import { work } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import CTA from "./../components/CTA.svelte";
  import Portfolio from "./../components/Portfolio.svelte";
  import TransitionWrapper from "./../components/TransitionWrapper.svelte";
  let active = 0;
  $: console.log(active);
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  import { loaded } from "./../stores/var.js";
  onMount(() => {
    loaded.set(true);
  });
</script>

<style>

</style>

<svelte:head>
  <title>{work.title}</title>
  <meta name="description" content={work.metaDesc} />
</svelte:head>
<SvelteSeo
  openGraph={{ title: work.title, description: work.metaDesc, 
    url: 'https://www.gohere.tech/work', 
    type: 'website', images: [{ url: 'https://gohere.ghost.io/content/images/size/w1600/2021/02/mr-engine2-2.jpg', alt: 'goHere® Portfolio' }] }} />
<TransitionWrapper>
  <Hero heading={work.h1} headingSub={work.h1Sub} />

  {#each work.section as section}
    <Section {...section} />
  {/each}
  <section class="section">
    <div class="container">
      {#each clients as client, i}
        <div class="client">
          <Portfolio {...client} />
        </div>
      {/each}
    </div>
  </section>

  <CTA extra={work.cta} />
</TransitionWrapper>
