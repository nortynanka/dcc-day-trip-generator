"use strict"


run();


function run(){

// OPTIONS

    let locations = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];
    let restaurants = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"];
    let transport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"];
    let funActivities = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"];

// LOCATIONS

    let selectedDestination = chooseUntilSatisfied(locations)

// RESTAURANTS

    let selectedRestaurant = chooseUntilSatisfied(restaurants)

// TRANSPORTATION
        
    let selectedTransportation = chooseUntilSatisfied(transport)

// ENTERTAINMENT

    let selectedEntertainment = chooseUntilSatisfied(funActivities)

    console.log(`Great job! You will be going to ${selectedDestination} then eating at ${selectedRestaurant}. Your mode of transportation will be ${selectedTransportation} and you will finish the day at ${selectedEntertainment}`);

    let userConfirmedCompleteTrip = prompt("Are you happy with the day trip? Y/N");

    if(userConfirmedCompleteTrip == "N"){
        run();
    }else{
        alert("Enjoy your trip!");
    }
}

// FUNCTIONS

function chooseUntilSatisfied(arrayOfOptions){

    let selectedOption = pickThing(arrayOfOptions);

    let userConfirmation = confirmTripChoice(selectedOption);

    while(userConfirmation != "Y"){
        selectedOption = pickThing(arrayOfOptions);
        userConfirmation = confirmTripChoice(selectedOption);
    }

    return selectedOption;

}

function pickThing(someArray) {

    let randomNumber = Math.floor(Math.random() * someArray.length);

    return someArray[randomNumber];
}

function confirmTripChoice(option) {
    let userConfirmation = prompt(`The generator chose ${option}. Are you satisfied with this choice? Y/N`);
    return userConfirmation;
}