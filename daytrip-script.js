"use strict"

//LOCATIONS ARRAY

let locations = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];

//FOOD/TRANSPORT/FUN ARRAYS
  
let dellsFood = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"]
let dellsTransport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"]
let dellsFun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"]

let mkeFood = ["Mader's Restaurant", "Blue's Egg", "AJ Bombers"]
let mkeTransport = ["Milwaukee County Transit System", "Olaa Taxi Milwaukee", "Enterprise Rent-A-Car"]
let mkeFun = ["Milwaukee County Zoo", "Pabst Mansion", "Mitchell Park Horticultural Conservatory"]

let eagleFood = ["Knucklehead Pub", "Hen House Cafe", "Fork in the Road"]
let eagleTransport = ["East Troy Trolley", "Wild 3L Ranch", "Yellow Discount Cab"]
let eagleFun = ["Old World Wisconsin", "Paradise Springs Nature Trail", "Kettle Moraine Ranch"]

let barabooFood = ["Log Cabin Family Restaurant", "Cheeze Factory Restaurant", "Baraboo Burger Company"]
let barabooTransport = ["Lamers Bus Lines", "Greyhound Bus", "Kobussen Buses, Ltd."]
let barabooFun = ["International Crane Foundation", "Circus World Museum", "Devil's Lake State Park"]

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
    return (foodArray[i]);
}

function pickTransportation(transportArray) {
    let i = Math.floor(Math.random() * transportArray.length);
    return (transportArray[i]);
}

function pickAttraction(funArray) {
    let i = Math.floor(Math.random() * funArray);
    return (funArray[i]);
}

//IF-ELSE STATEMENTS

if(chosenLocale === "Wisconsin Dells"); {
    let food = dellsFood;
    let transport = dellsTransport;
    let fun = dellsFun;
}
if(chosenLocale === "Milwaukee"); {
    let food = dellsFood;
    let transport = dellsTransport;
    let fun = dellsFun;
}
if(chosenLocale === "Eagle"); {
    let food = dellsFood;
    let transport = dellsTransport;
    let fun = dellsFun;
}
if(chosenLocale === "Baraboo");{
    let food = dellsFood;
    let transport = dellsTransport;
    let fun = dellsFun;
}

//Question 1: I thought there was a way to make the declaration and return of an index even more concise than 2 lines. Is there one?
//Question 2: Do I need a for loop containing a .find method for each of the functions so the computer knows from which arrays to grab from?