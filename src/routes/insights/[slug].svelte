<script context="module">
  export async function preload(page) {
    return this.fetch(
      "https://gohere.ghost.io/ghost/api/v3/content/posts/?key=e8993b7d47d963da2ddb5361ce"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const pagename = page.path;

        data.posts = data.posts.filter(i => pagename.includes(i.slug));
        return { pagedata: data.posts[0] };
      });
  }
</script>

<script>
  import TransitionWrapper from "./../../components/TransitionWrapper.svelte";
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  export let pagedata;
  let date = pagedata.published_at;
  let formatedDate;
  convertDate(date);
  function convertDate(date) {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const DD = new Date(date);
    const y = DD.getFullYear();
    const m = months[DD.getMonth()];
    const d = DD.getDate();
    const dayName = days[DD.getDay()];
    formatedDate = `${dayName}, ${d} ${m} ${y}`;
  }

  import { loaded } from "./../../stores/var.js";

  onMount(() => {
    loaded.set(true);
  });
</script>

<style>
  * {
    color: black;
    text-align: left;
  }
  .wrapper {
    background: white;
    padding: 0 5vw;
    padding-bottom: 4vw;
    margin-top: -12px;
  }
  .inner {
    margin: 0 auto;
    max-width: 1040px;
    width: 100%;
  }
  .head {
    margin: 0 auto;
    padding: 90px 170px 50px;
  }
  .full-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 25px 0 50px;
    border-radius: 3px;
  }
  .full-image img {
    max-width: 1040px;
    width: 100%;
    height: auto;
  }
  h1 {
    margin: 0 0 0.2em;
    font-size: 3.5rem;
    font-weight: 600;
  }
  .full-content {
    padding: 0 170px 6vw;
    margin: 0 auto;
    min-height: 230px;
    font-family: Georgia, serif;
    font-size: 1.5rem;
    line-height: 2em;
    background: white;
  }

  .byline {
    display: flex;
    justify-content: space-between;
    margin: 35px 0 0;
    padding-top: 15px;
    border-top: 1px solid #e3e9ed;
  }
  .byline-content {
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
  }
  svg {
    background: #cbeafb;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0 12px 0 0;
  }
  .meta-content h5 {
    margin: 0 0 3px;
    font-weight: 800;
    font-size: 0.7rem;
    line-height: 1rem;
    color: black;
  }
  .meta-content {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    color: #92a3ab;
    font-size: 0.6em;
    margin: 2px 0 0;
    font-size: 0.7rem;
    line-height: 0.8em;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-weight: 200;
  }
  figure img {
    max-width: 100%;
  }
</style>

<svelte:head>
  <title>{pagedata.meta_title} | goHere Insights</title>
  <meta name="description" content={pagedata.meta_description} />

</svelte:head>

<SvelteSeo
  openGraph={{ title: pagedata.meta_title, description: pagedata.meta_description, type: 'article', url: 'https://www.gohere.tech/insights/' + pagedata.slug, article: { publishedTime: pagedata.published_at, modifiedTime: pagedata.updated_at, tags: ['Augmented Reality', 'Mixed Reality', 'goHere'] }, images: [{ url: pagedata.feature_image, alt: 'Augment your Reality | goHere AR/MR' }] }} />
<TransitionWrapper>
  <div class="wrapper">
    <div class="inner">
      <div class="head">
        <h1>{pagedata.title}</h1>
        <div class="byline">
          <div class="byline-content">
            <div class="author-profile-image">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M3.513 18.998C4.749 15.504 8.082 13 12 13s7.251 2.504
                    8.487 5.998C18.47 21.442 15.417 23 12
                    23s-6.47-1.558-8.487-4.002zM12 12c2.21 0 4-2.79
                    4-5s-1.79-4-4-4-4 1.79-4 4 1.79 5 4 5z"
                    fill="#FFF" />
                </g>
              </svg>
            </div>
            <div class="meta-content">
              <h5>Elisabeth Balistreri</h5>
              <div class="sm">
                <time>{formatedDate}</time>
                <span>·</span>
                <span>{pagedata.reading_time} MIN READ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure class="full-image">
        <img src={pagedata.feature_image} alt={pagedata.title} />
      </figure>
      <div class="full-content">
        {@html pagedata.html}
      </div>
    </div>
  </div>
</TransitionWrapper>
