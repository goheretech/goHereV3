<script>
  import employees from "./../stores/employees.js";
  import Section from "./../components/Section.svelte";
  import { who } from "./../stores/content.js";
  import Hero from "./../components/Hero.svelte";
  import CTA from "./../components/CTA.svelte";
  import Employee from "./../components/Employee.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
  import WhoColor from "./../components/services/WhoColor.svelte";
  import SvelteSeo from "svelte-seo";

  import { onMount } from "svelte";
  import { loaded } from "./../stores/var.js";
  onMount(() => {
    loaded.set(true);
  });
</script>

<svelte:head>
  <title>{who.title}</title>
  <meta name="description" content={who.metaDesc} />
</svelte:head>

<SvelteSeo
  openGraph={{ title: who.title, description: who.metaDesc, url: 'https://www.gohere.tech/who', type: 'website', images: [{ url: 'https://gohere.ghost.io/content/images/size/w1600/2021/02/mr-menus-1.jpg', alt: 'goHere About our Mixed Reality Experts' }] }} />
<TransitionWrapper>
  <Hero heading={who.h1} headingSub={who.h1Sub} />

  {#each who.section as section}
    <Section {...section} />
  {/each}
  <WhoColor />
  {#each employees as employee}
    <Employee {...employee} />
  {/each}
  <CTA extra={who.cta} />
</TransitionWrapper>
