import { setGovernor, getState } from "./TransientState.js";
export const Governors = async () => {
  const state = getState();
  const response = await fetch("http://localhost:8088/governors?status=active");
  const governors = await response.json();

  let html = `<select id="governor">
                <option value="0">Choose a governor...</option>`;

  for (const governor of governors) {
    const isSelected = governor.id === state.selectedGovernor ? "selected" : "";
    html += `<option value="${governor.id}" ${isSelected}>${governor.name}</option>`;
  }

  html += `</select>`;

  return html;
};
const handleGovernorChange = (changeEvent) => {
  debugger;
  if (changeEvent.target.id === "governor") {
    const governorId = parseInt(changeEvent.target.value);
    setGovernor(governorId);
  }
};

document.addEventListener("change", handleGovernorChange);
