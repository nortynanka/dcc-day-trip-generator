"use strict"

//OPTIONS

let location = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];
let food = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"];
let transport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"];
let fun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"];

//LOCATION

let selectedDestination = pickThing(location);

userConfirmation = confirmTripChoice(selectedDestination);

pickSomethingElse();

//RESTAURANT

let selectedRestaurant = pickThing(food); 

userConfirmation = confirmTripChoice(selectedRestaurant); 

pickSomethingElse();

//TRANSPORTATION
    
let selectedTransportation = pickThing(transport); 

userConfirmation = confirmTripChoice(selectedTransportation);

pickSomethingElse();

//ENTERTAINMENT

let selectedEntertainment = pickThing(fun); 

userConfirmation = confirmTripChoice(selectedEntertainment);

pickSomethingElse();

//FUNCTIONS

function pickThing(someArray) {
    let i = Math.floor(Math.random() * someArray.length);
    return (someArray[i]);
}

function confirmTripChoice(option) {
    let userConfirmation = prompt(`The generator chose ${option}. Are you satisfied with this choice? Y/N`);
    return userConfirmation;
}

function chooseAgain(categoryName) {
    while(userConfirmation == "N");
        pickThing(option);
}