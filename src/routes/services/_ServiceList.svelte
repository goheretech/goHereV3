<script>
  import { serv } from "./_services.js";
  import { services } from "./../../stores/services.js";
</script>

<style>
  .gg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hld {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 1px 1px;
    margin-bottom: 130px;
    justify-items: stretch;
    align-items: start;
    margin-top: 130px;
  }

  img {
    height: 173px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 200ms;
  }

  a:hover {
    letter-spacing: 2px;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .co {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
  }
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  a {
    margin-bottom: 13px;
    font-size: 19px;
    text-align: center;
  }

  h2 {
    font-size: 60px;
    margin-bottom: 20px;
  }

  @media (max-width: 1068px) {
    .hld {
      grid-template-columns: repeat(2, 1fr);
    }

    .col {
      margin-bottom: 50px;
    }

    a {
      margin-bottom: 7px;
      font-size: 15px;
      text-align: center;
    }

    .co {
      width: 250px;
    }
  }
</style>

<div class="gg">

  <div class="hld">
    {#each services as service}
      <div class="col">
        <div class="co">

          <img
            src={service.icon}
            alt="goHere for Greatnessness"
            style="width:222px;"
            class="colorRotate" />
          <h2 class="colorDynamic" data-glow={service.name}>{service.name}</h2>
        </div>

        <div class="co">
          <ul>

            {#each serv as s}
              {#if s.section == service.name}
                <li>
                  <a href="/services/{s.slug}">{s.name}</a>
                </li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
      <!-- <div class="card-container">
      <div class="card">
        <div class="front">
          <img
          src={service.icon}
          alt="goHere for Greatnessness"
          style="width:222px;"
          class="colorRotate" />
          <h2 class="colorDynamic" data-glow={service.name}>
            {service.name}
          </h2>
        </div>
        <div class="back">
          <ul>
          
            {#each serv as s}
            {#if s.section == service.name}
            <li> <a href="/services/{s.slug}">{s.name}</a></li>
            {/if}
            {/each}
          </ul>
        </div>
      </div>
    </div> -->
    {/each}
  </div>

</div>
