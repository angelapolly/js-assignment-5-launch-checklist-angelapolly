// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

//    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = myFetch();
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.getElementById("form");
   form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
    console.log(pilot.value);
    console.log(copilot.value);
    console.log(fuelLevel.value);
    console.log(cargoLevel.value);
        // if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        //     alert("All fields are required!");
        // }
   
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });
});

