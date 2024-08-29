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