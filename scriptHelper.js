// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (input === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
    
 }
 
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
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
}