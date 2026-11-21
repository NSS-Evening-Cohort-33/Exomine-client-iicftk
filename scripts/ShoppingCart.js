import { getState  } from "./.TransientState.js"

const export ShoppingCart = async () => {
    const state = getState()
    const response = await fetch("http://localhost:8088/")
    const shoppingCart = await response.json()

}

//Get the selected governor and find their colonyId.

//Find the facility’s record for the selected mineral (in facilityMinerals).

//Subtract 1 from that facility record’s quantity and save it (PUT).

//Look in colonyMinerals for a record that matches this colony and this mineral.

//If one exists: add 1 to its quantity and save it (PUT).

//If none exists: create a new record with colonyId, mineralId, and quantity: 1 (POST).

//Tell the page to re-render (that’s the stateChanged event already at the bottom of your function).