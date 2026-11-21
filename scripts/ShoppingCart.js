import { getState, purchaseMineral } from "./TransientState.js"

//Get the current state (what the user picked) 
export const ShoppingCart = async () => {
    const state = getState()

    // Nothing picked yet: show an empty cart
     if (state.mineralId === 0) {
    return `<p>Your cart is empty</p>`
    }
//fetching selected facility's record; get name 
    const facilityResponse = await fetch(`http://localhost:8088/facilities/${state.facilityId}`)
    const facility = await facilityResponse.json()

//fetching selected mineral's record; get name 
    const mineralResponse = await  fetch(`http://localhost:8088/minerals/${state.mineralId}`)
    const mineral = await mineralResponse.json()

//building html and button
    let html = `
            <p>1 ton of ${mineral.name} from ${facility.name}</p>
            <button id="purchase">Purchase Mineral</button>`
//return the html so main.js can put on it on the page 
return html 
}


//set up click event for when Puchase Button clicked
const handlePurchaseButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        purchaseMineral()
    }
}

document.addEventListener("click", handlePurchaseButtonClick)