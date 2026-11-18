import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import { FacilityMinerals } from "./FacilityMinerals.js";

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();
  const FacilityMineralsHTML = await FacilityMinerals();

  container.innerHTML = `
    <h1>Solar System Mining Marketplace</h1>

    <article class="row">
      <section class="choices">
        ${governorsHTML}
        <!-- Facilities select goes here (ticket #2) -->
      </section>
      <section class="box colony-minerals">
        ${colonyMineralsHTML}
      </section>
    </article>

    <article class="row">
      <section class="box facility-minerals">
        ${FacilityMineralsHTML}
      </section>
      <section class="box cart">
        <h2>Cart</h2>
        <!-- Space Cart goes here (ticket #3) -->
      </section>
    </article>
  `;
};

document.addEventListener("stateChanged", render);

render();
