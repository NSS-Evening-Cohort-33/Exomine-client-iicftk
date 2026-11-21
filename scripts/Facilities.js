=import {setFacility, getState} from "./TransientState.js"

const handleFacilityChange = (changeEvent) => {

    if (changeEvent.target.id === "facility") {
        const facilityId = parseInt(changeEvent.target.value)
    
    setFacility(facilityId)
}
}

document.addEventListener("change", handleFacilityChange)


export const Facilities = async () => {
    const state = getState()
    const response = await fetch("http://localhost:8088/facilities?status=active")
    const facilities = await response.json()

    let html = `<select id="facility">
    <option value="0">Choose a facility...</option>`

    for (const facility of facilities) {
        const isSelected = facility.id === state.selectedFacility ? "selected" : ""

        html += `<option value="${facility.id}" ${isSelected}>${facility.name}</option>`
    }

    html += `</select>`

    return html
    
}