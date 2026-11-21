import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import { Facilities } from "./Facilities.js";
import {FacilityMinerals} from './FacilityMinerals.js'
import { ShoppingCart } from './ShoppingCart.js';
const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();
  const facilitiesHTML = await Facilities()
  const FacilityMineralsHTML = await FacilityMinerals();
  const shoppingCartHTML = await ShoppingCart()

  container.innerHTML = `
    <h1>Solar System Mining Marketplace</h1>

    <article class="row">
      <section class="choices">
        ${governorsHTML}
        ${facilitiesHTML}
        ${colonyMineralsHTML}
      </section>
    </article>

    <article class="row">
      <section class="box facility-minerals">
        ${FacilityMineralsHTML}
      </section>
      <section class="box cart">
        <h2>Cart</h2>
        ${shoppingCartHTML}
      </section>
    </article>
  `;
};

document.addEventListener("stateChanged", render);

render();
