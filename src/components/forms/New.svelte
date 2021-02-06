<script>
  import { db } from "./../../firebase.js";
  import { global } from "./../../stores/content.js";
  import { fade } from "svelte/transition";
  let form = {
    name: "",
    project: "",
    email: "",
    phone: "",
    website: ""
  };
  let error = false;
  let sent = false;
  let zoom = false;
  let err = "";

  function zoomIn() {
    zoom = true;
  }
  function zoomOut() {
    zoom = false;
  }
  async function sendContactMessage() {
    try {
      console.log(form);

      await db.collection("leads").add(form);
      sent = true;
      zoom = true;
    } catch (e) {
      let numE = 0;
      if (form.name <= 2) {
        err = "Please put your full name.";
        numE++;
      }
      if (form.email <= 6) {
        err = "Please fill in your email address.";
        numE++;
      }
      if (form.project <= 4) {
        err = "Tell us about your project before you submit.";
        numE++;
      }
      if (form.phone <= 9) {
        err = "Please put your phone number (Don't forget the area code!)";
        numE++;
      }
      if (form.website <= 3) {
        err =
          "Please put your current website. If you don't have one please put 'None'";
        numE++;
      }

      if (numE > 1) {
        err = "Please fill the form to completion.";
      }

      if (numE == 0) {
        err = "Unknown Error.  Please call 305.999.5595.";
      }
    }
  }
</script>

<section class="form">
  <div class="form_holder">
    {#if sent == false}
      <form
        action=""
        on:submit|preventDefault={sendContactMessage}
        out:fade={{ delay: 0, duration: 500 }}>
        <div class="form_body">
          <h3>Get A Quote</h3>
          <input
            type="text"
            bind:value={form.name}
            class:filled={form.name.length > 2}
            placeholder="Full Name" />
          <input
            type="text"
            bind:value={form.phone}
            class:filled={form.phone.length >= 10}
            placeholder="Phone Number" />
          <input
            type="text"
            bind:value={form.email}
            class:filled={form.email.length > 6}
            placeholder="Email Address" />
          <input
            type="text"
            bind:value={form.website}
            class:filled={form.website.length > 3}
            placeholder="Website" />
          <input
            type="text"
            bind:value={form.project}
            class:filled={form.project.length > 3}
            placeholder="Type of Project" />
          <h6>{err}</h6>
          <button
            class="button colorRotate"
            on:click={sendContactMessage}
            on:mouseenter={zoomIn}
            on:mouseleave={zoomOut}>
            Submit
          </button>
        </div>
      </form>
    {:else}
      <div class="form_confirmation" in:fade={{ delay: 500, duration: 500 }}>
        <h4>Looks Great, {form.name}</h4>
        <p>
          Our team will review your website,
          <a href={form.website}>{form.website}</a>
        </p>
        <p>
          After we assess your needs one of our brand ambassadors will be in
          contact with you.
        </p>
        <h5 class="thanks">Thank you,</h5>
        <h5 class="gohere">goHere</h5>

        <h6>
          If you have any questions or need immediate assistance please call us
          at
          <a href="tel:{global.phone}">{global.phone}</a>
        </h6>
      </div>
    {/if}
  </div>
  <div class="form_window">
    <img src="img/astro.png" alt="goHere" id="astro" class:zoom />
    <img src="img/space/planet1-min.png" alt="goHere" id="planet" class:zoom />
  </div>
</section>
