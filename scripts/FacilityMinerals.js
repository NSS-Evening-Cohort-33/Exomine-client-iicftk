import {getState, setMineral} from './TransientState.js'

const handleMineralChoice = (eventChange) => {
    if(eventChange.target.name === "minerals"){
        setMineral(parseInt(eventChange.target.value))
    }
}

document.addEventListener("change", handleMineralChoice)


export const FacilityMinerals = async() => {
    const transientState = getState()
    const FacilityMineralsResponse = await fetch("http://localhost:8088/facilityMinerals?_expand=facility&_expand=mineral")
    const facilityMineralsArray = await FacilityMineralsResponse.json()

    let html = "<h2>Facility Minerals</h2>"
    if (transientState.governorId !== 0 && transientState.facilityId !== 0){
        const facilitySelected = facilityMineralsArray.find((facilityMineral) => transientState.facilityId === facilityMineral.facilityId)
        html = `<h2>${facilitySelected.facility.name}</h2>`
        for (const item of facilityMineralsArray) {
            if (transientState.facilityId === item.facilityId ){
                const isChecked = transientState.mineralId === item.mineralId ? "checked" : ""
                html += `<input type="radio" name="minerals" value="${item.mineralId}" id="${item.facility.name}-${item.mineral.name}-${item.quantity}" ${isChecked}><label for="${item.facility.name}-${item.mineral.name}-${item.quantity}">${item.quantity} tons of ${item.mineral.name}</label>`
            }
        }
    }
    return html
}