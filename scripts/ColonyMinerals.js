import { getState } from "./TransientState.js";

export const ColonyMinerals = async () => {
  const state = getState();

  if (state.governorId === 0) {
    return `<h2>Colony Minerals</h2>`;
  }

  const govResponse = await fetch(
    `http://localhost:8088/governors/${state.governorId}?_expand=colony`,
  );
  const governor = await govResponse.json();

  const mineralsResponse = await fetch(
    `http://localhost:8088/colonyMinerals?colonyId=${governor.colonyId}&_expand=mineral`, // ← colonyId
  );
  const colonyMinerals = await mineralsResponse.json();

  let html = `<h2>${governor.colony.name} Minerals</h2><ul>`;

  for (const colonyMineral of colonyMinerals) {
    html += `<li>${colonyMineral.quantity} tons of ${colonyMineral.mineral.name}</li>`; // ← quantity, name
  }

  html += `</ul>`;
  return html;
};
