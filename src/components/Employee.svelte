<script>
  export let name;
  export let title;
  export let nick;
  export let bioStart;
  export let bio;
  export let picture;
  export let flipped;
</script>

<style>
  .emp_holder {
    display: flex;
    width: 100%;
    padding: 3rem 0px;
  }

  .col {
    width: 50%;
    text-align: left;
    min-height: 40vh;

    margin: 3rem 0;
    display: flex;
    align-content: flex-start;
    justify-items: center;
    flex-direction: column;
  }
  h5 {
    color: purple;
    text-transform: uppercase;
    font-weight: 800;
    line-height: 100%;
  }
  h2 {
    color: purple;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 11rem;
    line-height: 100%;
    text-align: left;
  }

  h3 {
    font-size: 1.75rem;
    padding: 2rem 0;
  }

  p {
    font-size: 1.5rem;
  }

  .headshot {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 80%;
  }

  .col:first-child {
    margin-right: 100px;
    width: 55%;
    /* padding: 7rem 0; */
  }

  /*Flip*/

  .flipped .backNeb {
    order: -1;
    margin-right: 100px;
  }

  .flipped .col:first-child {
    margin-right: 0px;
  }

  @media (max-width: 1068px) {
    * {
      text-align: left;
    }
    .emp_holder {
      flex-direction: column;
      align-items: center;
    }
    h2 {
      font-size: 6rem;
      margin: 0;
      text-align: left;
    }
    .col {
      width: 95%;
    }
    .col:first-child {
      margin-right: 0;
      width: 95%;
      /* padding: 7rem 0; */
      margin-top: 0px;
      padding-top: 0px;
    }
    .headshot {
      height: 500px;
    }
    .backNeb {
      order: -1;
      margin-right: 0px;
    }
    .flipped .backNeb {
      margin-right: 0;
    }
  }
</style>

<section class="section">
  <div class="container">
    <div class="emp_holder" class:flipped>
      <div class="col">
        <h5>{name} - {title}</h5>
        <h2>{nick}</h2>
        <h3>
          {@html bioStart}
        </h3>
        <p>
          {@html bio}
        </p>
      </div>
      <div class="col backNeb colorRotateLess">
        <div class=" headshot " style="background-image:url({picture})" />
      </div>
    </div>
  </div>
</section>
