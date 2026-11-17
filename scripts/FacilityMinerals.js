import {getState} from './TransientState.js'

const transientState = getState()
const FacilitiesResponse = await fetch("http://localhost:8088/facilities")
const facilities = await FacilitiesResponse.json()

export const FacilityMinerals = async () => {
    const FacilityMinerals = await fetch("http://localhost:8088/facilityMinerals?&expand=facility&expand=mineral")
    .then(res => res.json())

    let html = "<h2>Facility Minerals</h2>"
    if (transientState.governorId !== 0 && transientState.facilityId !== 0){
        for (const item of FacilityMinerals) {
            if (transientState.facilityId === item.facilityId ){
                html = `<h2>${item.facility.name}</h2>`
                html += `<input type="radio" id="${item.facility.name}-${item.mineral.name}-${item.quantity}"><label for="${item.facility.name}-${item.mineral.name}-${item.quantity}">${item.quantity} tons of ${item.mineral.name}/label>`
            }
        }
        return html
    }
}