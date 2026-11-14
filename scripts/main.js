import { Governors } from "./Governors.js";

const container = document.querySelector("#container");

const render = async () => {
  const governorsHTML = await Governors();

  container.innerHTML = `
        ${governorsHTML}
    `;
};

document.addEventListener("stateChanged", render);

render();
