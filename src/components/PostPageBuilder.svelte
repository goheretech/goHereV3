<script>
  export let posts;
  import Post from "./Post.svelte";
</script>

<style>
  .post_holder {
    display: flex;
    flex-wrap: wrap;
    padding: 3vw 2vw;
    background: white;
  }

  @media (max-width: 1068px) {
    .post_holder {
      flex-wrap: wrap;
    }
  }
</style>

<div class="post_holder">
  {#each posts as postdata, i}
    {#if i == 0 || i == 6 || i == 12}
      <Post {postdata} type={2} />
    {:else if i == 4 || i == 5 || i == 10 || i == 11}
      <Post {postdata} type={3} />
    {:else}
      <Post {postdata} type={1} />
    {/if}
  {/each}
</div>
