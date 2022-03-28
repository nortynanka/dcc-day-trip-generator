"use strict"

//LOCATIONS ARRAY

let locations = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];

//DESTINATION FUNCTION

function pickTrip(randomLocation) {
    let i = Math.floor(Math.random() * randomLocation.length);
    return (randomLocation[i]);
}
    
    let chosenLocale = pickTrip(locations);
        console.log("You're going on a day trip to " + chosenLocale);

//FOOD/TRANSPORT/FUN FUNCTIONS

function pickRestaurant(foodArray) {
    let i = Math.floor(Math.random() * foodArray.length);
    console.log(foodArray[i]);
}

function pickTransportation(transportArray) {
    let i = Math.floor(Math.random() * transportArray.length);
    console.log(transportArray[i]);
}

function pickAttraction(funArray) {
    let i = Math.floor(Math.random() * funArray.length);
    console.log(funArray[i]);
}

//FOOD, TRANSPORT, FUN PICKER

if (chosenLocale === "Wisconsin Dells") {
let food = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"];
let transport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"];
let fun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"];
pickRestaurant(food);
pickTransportation(transport);
pickAttraction(fun);
}

if (chosenLocale === "Milwaukee") {
let food = ["Mader's Restaurant", "Blue's Egg", "AJ Bombers"];
let transport = ["Milwaukee County Transit System", "Olaa Taxi Milwaukee", "Enterprise Rent-A-Car"];
let fun = ["Milwaukee County Zoo", "Pabst Mansion", "Mitchell Park Horticultural Conservatory"];
pickRestaurant(food);
pickTransportation(transport);
pickAttraction(fun);
}

if (chosenLocale === "Eagle") {
let food = ["Knucklehead Pub", "Hen House Cafe", "Fork in the Road"];
let transport = ["East Troy Trolley", "Wild 3L Ranch", "Yellow Discount Cab"];
let fun = ["Old World Wisconsin", "Paradise Springs Nature Trail", "Kettle Moraine Ranch"];
pickRestaurant(food);
pickTransportation(transport);
pickAttraction(fun);
}

if (chosenLocale === "Baraboo") {
let food = ["Log Cabin Family Restaurant", "Cheeze Factory Restaurant", "Baraboo Burger Company"];
let transport = ["Lamers Bus Lines", "Greyhound Bus", "Kobussen Buses, Ltd."];
let fun = ["International Crane Foundation", "Circus World Museum", "Devil's Lake State Park"];
pickRestaurant(food);
pickTransportation(transport);
pickAttraction(fun);
}