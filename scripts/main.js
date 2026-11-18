import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";
import { Facilities } from "./Facilities.js";

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();
  const facilitiesHTML = await Facilities()

  container.innerHTML = `
        ${governorsHTML}
         ${colonyMineralsHTML}
         ${facilitiesHTML}
    `;
};

document.addEventListener("stateChanged", render);

render();
