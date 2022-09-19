<script>
  export let postdata;
  export let type;
  import { onMount } from "svelte";
  let postedOn = new Date(postdata.published_at);
  var readingTimeInMinutes;

  onMount(() => {
    articleTime();
  });
  let date =
    postedOn.getMonth() +
    1 +
    "-" +
    postedOn.getDate() +
    "-" +
    postedOn.getFullYear();

  function articleTime() {
    var txt = postdata.html,
      wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;

    readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
  }
</script>

<style>
  .article {
    background: white;
    color: rgb(34, 34, 34);
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 1vw;
    flex-shrink: 1;
    width: 31%;
  }

  .type2 {
    width: 100%;
  }
  .type3 {
    width: 47.5%;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 100%;
    margin: 10px 0;
  }
  h3 {
    font-size: 0.8rem;
  }

  .img {
    width: 100%;
    height: 200px;
    background: white;
    background-position: center;
    background-size: cover;
  }

  .type2 .img {
    height: 400px;
    min-width: 70%;
    width: 60%;
  }
  .horz {
    display: flex;
  }

  .texthold {
    padding-left: 50px;
  }

  @media (max-width: 1068px) {
    .article {
      width: 100%;
    }

    .horz{
      flex-direction:column;
    }

    .type2 .img{
      width:100%;
    }

    .img{
      height: 400px;
    }

    .texthold{
    padding-left:0px;
    }

  }

  .content {
    margin-top: 10px;
    display: block;
    margin-bottom: 40px;
  }
</style>

{#if type == 1}

  <div class="article">
    <a rel="prefetch" href="/insights/{postdata.slug}">
      <div class="img" style="background-image:url({postdata.feature_image})" />
      <h2>{postdata.title}</h2>
      <h3>{date} | {readingTimeInMinutes} MIN READ</h3>
      <span class="content" id="content">
        {@html postdata.custom_excerpt}
      </span>
    </a>
  </div>
{/if}

{#if type == 2}
  <div class="article type2">
    <a rel="prefetch" href="/insights/{postdata.slug}" class="horz">
      <div class="img" style="background-image:url({postdata.feature_image})" />
      <div class="texthold">
        <h2>{postdata.title}</h2>
        <h3>{date} | {readingTimeInMinutes} MIN READ</h3>
        <span class="content" id="content">
          {@html postdata.custom_excerpt}
        </span>
      </div>
    </a>
  </div>
{/if}
{#if type == 3}
  <div class="article type3">
    <a rel="prefetch" href="/insights/{postdata.slug}">
      <div class="img" style="background-image:url({postdata.feature_image})" />
      <h2>{postdata.title}</h2>
      <h3>{date} | {readingTimeInMinutes} MIN READ</h3>
      <span class="content" id="content">
        {@html postdata.custom_excerpt}
      </span>
    </a>
  </div>
{/if}
