const state = {
  governorId: 0,
  facilityId: 0,
  mineralId: 0
};

export const getState = () => {
  return state;
};

const resetState = () => {
  state.governorId = 0;
  state.facilityId = 0;
  state.mineralId = 0;
};

export const setGovernor = (governorId) => {
  state.governorId = governorId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setFacility = (facilityId) => {
  state.facilityId = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const setMineral = (mineralId) => {
  state.mineralId = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};


export const purchaseMineral = async() => {
  const colonyMineralsResponse = await fetch("http://localhost:8088/colonyMinerals");
  const colonyMinerals = await colonyMineralsResponse.json();

  const governorsResponse = await fetch("http://localhost:8088/governors")
  const governors = await governorsResponse.json();

  const facilityMineralsResponse = await fetch("http://localhost:8088/facilityMinerals")
  const facilityMinerals = await facilityMineralsResponse.json()

  if (state.governorId !== 0 && state.facilityId !== 0 && state.mineralId !== 0) {
    const governorMatch = governors.find((governor) => governor.id === state.governorId)
    const colonyId = governorMatch.colonyId

    const facilityMineralsMatch = facilityMinerals.find((facilityMineral) => state.facilityId === facilityMineral.facilityId && facilityMineral.mineralId === state.mineralId )

    facilityMineralsMatch.quantity--
    const facilityPutOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facilityMineralsMatch),
    };
    const response = await fetch(`http://localhost:8088/facilityMinerals/${facilityMineralsMatch.id}`,facilityPutOptions);
    
    const colonyMineralsMatch = colonyMinerals.find((item) => colonyId === item.colonyId && state.mineralId === item.mineralId);
    if (colonyMineralsMatch !== undefined) {
      colonyMineralsMatch.quantity++
      const colonyPutOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colonyMineralsMatch),
      };

      const response = await fetch(`http://localhost:8088/colonyMinerals/${colonyMineralsMatch.id}`,colonyPutOptions);

    } else {
      const colonyPostOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "colonyId": colonyId,
          "mineralId": state.mineralId,
          "quantity": 1
        }),
      };
      const response = await fetch("http://localhost:8088/colonyMinerals",colonyPostOptions);
    }
    resetState()

  } else {
    window.alert("you must select all options...");
  }
  document.dispatchEvent(new CustomEvent("stateChanged"));
};


  /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?
›
        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */