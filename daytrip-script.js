"use strict"


//LOCATION CHOICES

let locationsArray = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];
let food = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"];
let transport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"];
let fun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"];

let selectedDestination = pickTrip(locationsArray); {

let userConfirmation = confirmTripChoice(selectedDestination);

while (userConfirmation == "N") {
    selectedDestination = pickTrip(locationsArray);
    console.log("You will be going on a day trip to " + selectedDestination);
    userConfirmation = confirmTripChoice(selectedDestination);
    }
}

let selectedRestaurant = pickRestaurant(food); {

let userConfirmation = confirmTripChoice(selectedRestaurant); 

while(userConfirmation == "N") {
    selectedRestaurant = pickRestaurant(food);
    console.log("You will be eating at " + selectedRestaurant);
    userConfirmation = confirmTripChoice(selectedRestaurant);
    }
}

let selectedTransportation = pickTransportation(transport); {

let userConfirmation = confirmTripChoice(selectedTransportation);

while(userConfirmation == "N") {
    selectedTransportation = pickTransportation(transport);
    console.log("You will travel via " + selectedTransportation);
    userConfirmation = confirmTripChoice(selectedTransportation);
    }
}  

let selectedEntertainment = pickAttraction(fun); {

let userConfirmation = confirmTripChoice(selectedEntertainment);

while(userConfirmation == "N") {
    selectedEntertainment = pickAttraction(fun);
    console.log("You will go to " + selectedEntertainment);
    userConfirmation = confirmTripChoice(selectedEntertainment);
    }
}

//TRIP CONFIRMATION

if (userConfirmation === "Y") {
alert("Yay! Enjoy your trip!");
console.log(`You are going on trip to ${selectedDestination}. You will eat a meal at ${selectedRestaurant}, travel via ${selectedTransportation}, and visit ${selectedEntertainment}.`)
}

//FOOD, TRANSPORT, FUN, DESTINATION FUNCTIONS

function pickTrip(randomLocation) {
    let i = Math.floor(Math.random() * randomLocation.length);
    return (randomLocation[i]);
}

function pickRestaurant(foodArray) {
    let i = Math.floor(Math.random() * foodArray.length);
    return (foodArray[i]);
}

function pickTransportation(transportArray) {
    let i = Math.floor(Math.random() * transportArray.length);
    return (transportArray[i]);
}

function pickAttraction(funArray) {
    let i = Math.floor(Math.random() * funArray.length);
    return (funArray[i]);
}

function confirmTripChoice(option) {
    let userConfirmation = prompt(`The generator chose ${option}. Are you satisfied with this choice? Y/N`);
    return userConfirmation;
}



//FOOD, TRANSPORT, FUN PICKER

// let chosenLocale = pickTrip(locationsArray);
//     console.log(`You will be going on a day trip to ${chosenLocale}.`);

// if (chosenLocale === "Wisconsin Dells") {
// let food = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"];
// let transport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"];
// let fun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"];
// console.log("You will be eating at " + pickRestaurant(food));
// console.log("You will travel via " + pickTransportation(transport));
// console.log("You will go to " + pickAttraction(fun));
// }

// if (chosenLocale === "Milwaukee") {
// let food = ["Mader's Restaurant", "Blue's Egg", "AJ Bombers"];
// let transport = ["Milwaukee County Transit System", "Olaa Taxi Milwaukee", "Enterprise Rent-A-Car"];
// let fun = ["Milwaukee County Zoo", "Pabst Mansion", "Mitchell Park Horticultural Conservatory"];
// console.log("You will be eating at " + pickRestaurant(food));
// console.log("You will travel via " + pickTransportation(transport));
// console.log("You will go to " + pickAttraction(fun));
// }

// if (chosenLocale === "Eagle") {
// let food = ["Knucklehead Pub", "Hen House Cafe", "Fork in the Road"];
// let transport = ["East Troy Trolley", "Wild 3L Ranch", "Yellow Discount Cab"];
// let fun = ["Old World Wisconsin", "Paradise Springs Nature Trail", "Kettle Moraine Ranch"];
// console.log("You will be eating at " + pickRestaurant(food));
// console.log("You will travel via " + pickTransportation(transport));
// console.log("You will go to " + pickAttraction(fun));
// }

// if (chosenLocale === "Baraboo") {
// let food = ["Log Cabin Family Restaurant", "Cheeze Factory Restaurant", "Baraboo Burger Company"];
// let transport = ["Lamers Bus Lines", "Greyhound Bus", "Kobussen Buses, Ltd."];
// let fun = ["International Crane Foundation", "Circus World Museum", "Devil's Lake State Park"];
// console.log("You will be eating at " + pickRestaurant(food));
// console.log("You will travel via " + pickTransportation(transport));
// console.log("You will go to " + pickAttraction(fun));
// }

//USER CONFIRMATION
