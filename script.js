const { validateInput, formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    const cargoMass = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, pilot, copilot, fuelLevel, cargoMass);

});

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
