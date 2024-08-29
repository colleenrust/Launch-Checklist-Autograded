const { validateInput } = require("./scriptHelper");

// Write your JavaScript code here!
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass){
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");
if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
    alert("All fields required!");
    return;
}
if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || 
validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
    alert("Please enter valid information for each field.");
    return;

}

//update pilot and copilot beotch
pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

let readyForLaunch = true;
if(Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = "Fuel level to low for launch";
    readyForLaunch = false;
} else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";

}

if(Number(cargoMass) > 10000){
    cargoStatus.innerHTML = "Cargo mass too high for launch";
    readyForLaunch = false;
} else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

}

//update launch status now
if(readyForLaunch){
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "green";
    faultyItems.style.visibility = "hidden";
}else {
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
    faultyItems.style.visibility = "visible";
}

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });
}