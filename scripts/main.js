import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import {FacilityMinerals} from './FacilityMinerals.js'

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();
  const FacilityMineralsHTML = await FacilityMinerals();

  container.innerHTML = `
        ${governorsHTML}
        ${colonyMineralsHTML}
        ${FacilityMineralsHTML} 
    `;
};

document.addEventListener("stateChanged", render);

render();
