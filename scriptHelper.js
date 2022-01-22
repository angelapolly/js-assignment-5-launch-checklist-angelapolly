// Write your helper functions here!
try {
require('isomorphic-fetch');
} catch (e) {
    //do nothing
}
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const container = document.getElementById("missionTarget");

    container.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}


function validateInput(testInput) {
 if (testInput === "") {
     return "Empty";
 } else if (isNaN(Number(testInput))) {
     return "Not a Number";
 } else {
     return "Is a Number";
 }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const inputValues = [pilot, copilot, fuelLevel, cargoLevel];
    for (let i = 0; i < inputValues.length; i++) {
        if (validateInput(inputValues[i]) === "Empty") {
            alert("All fields are required!");
            return;
        }
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Enter valid information for each field.")
        return;
    }
    fuelLevel = Number(fuelLevel);
    cargoLevel = Number(cargoLevel);
    const pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;

    const copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;

    let fuelUpdate = document.getElementById("fuelStatus");
    let launchStatusUpdate = document.getElementById("launchStatus");
    let cargoMassUpdate = document.getElementById("cargoStatus");
    let isReady = true;

    if (fuelLevel < 10000) {
      fuelUpdate.innerHTML= "Fuel Level too low for launch";
      isReady = false;
    } else {
        fuelUpdate.innerHTML= "Fuel Level high enough for launch";
    }
    if (cargoLevel > 10000) {
      cargoMassUpdate.innerHTML= "Cargo mass too heavy for launch";
      isReady = false;
    } else {
      cargoMassUpdate.innerHTML= "Cargo mass low enough for launch.";
    }
    if (!isReady) {
        launchStatusUpdate.innerHTML= "Shuttle Not Ready for Launch";
        launchStatusUpdate.style.color = "rgb(199, 37, 78)";
    } else {
        launchStatusUpdate.innerHTML= "Shuttle is Ready for Launch";
        launchStatusUpdate.style.color = "rgb(65, 159, 106)";
    }
    list.style.visibility = "visible";
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}
myFetch();

function pickPlanet(planets){
    let randomPlanet = Math.floor(Math.random()*planets.length);
    return planets[randomPlanet];
}

try {
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e){
    //do nothing
}