import { Governors } from "./Governors.js";
import { ColonyMinerals } from "./ColonyMinerals.js";

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();
  const colonyMineralsHTML = await ColonyMinerals();

  container.innerHTML = `
        ${governorsHTML}
         ${colonyMineralsHTML}
    `;
};

document.addEventListener("stateChanged", render);

render();
