import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import { Facilities } from "./Facilities.js";
import {FacilityMinerals} from './FacilityMinerals.js'

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();
  const facilitiesHTML = await Facilities()
  const FacilityMineralsHTML = await FacilityMinerals();

  container.innerHTML = `
        ${governorsHTML}
         ${colonyMineralsHTML}
         ${facilitiesHTML}
        ${colonyMineralsHTML}
        ${FacilityMineralsHTML} 
    `;
};

document.addEventListener("stateChanged", render);

render();
