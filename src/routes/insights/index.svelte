<script context="module">
  export async function preload(page) {
    return this.fetch(
      "https://gohere.ghost.io//ghost/api/v2/content/posts/?key=e8993b7d47d963da2ddb5361ce#"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        return { posts: data.posts };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  import { insights } from "./../../stores/content.js";
  import Hero from "./../../components/Hero.svelte";
  import TransitionWrapper from "./../../components/TransitionWrapper.svelte";
  import PostPageBuilder from "./../../components/PostPageBuilder.svelte";
  import Section from "./../../components/Section.svelte";
  import Post from "./../../components/Post.svelte";
  import CTA from "./../../components/CTA.svelte";
  import { loaded } from "./../../stores/var.js";
  import SvelteSeo from "svelte-seo";

  export let posts;
  // const apiURL =
  //   "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce";
  // let data = [];
  // onMount(async function() {
  //   const response = await fetch(apiURL);
  //   data = await response.json();
  //   posts = data.posts;
  //   loaded.set(true);
  // });

  loaded.set(true);
</script>

<svelte:head>
  <title>{insights.title}</title>
  <meta name="description" content="" />
  {insights.metaDesc}
</svelte:head>

<SvelteSeo
  openGraph={{ title: insights.title, description: insights.metaDesc, url: 'https://www.gohere.tech/insights', type: 'website', images: [{ url: 'https://gohere.ghost.io/content/images/size/w1600/2021/02/cafe-menu-mixed-reality-optimized-3.jpg', alt: 'goHere Mixed Reality Insights' }] }} />

<!-- <TransitionWrapper> -->
<Hero heading={insights.h1} headingSub={insights.h1Sub} />

{#each insights.section as section}
  <Section {...section} />
{/each}
<PostPageBuilder {posts} />

<CTA extra={insights.cta} />
<!-- </TransitionWrapper> -->
