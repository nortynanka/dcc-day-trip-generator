"use strict"

//Locations to choose from for a day trip:
let locations = ["Wisconsin Dells", "Milwaukee", "Eagle", "Baraboo"];

//Food, transport, and entertainment options for each location, respectively:
    let dellsFood = ["Moose Jaw Pizza", "Monk's Bar & Grill", "High Rock Cafe"]
    let dellsTransport = ["Dells City Taxi", "Original Wisconsin Ducks", "Dells Boat Tours"]
    let dellsFun = ["Noah's Ark Waterpark", "Tommy Bartlett Exploratory", "Wizard Quest"]

    let mkeFood = ["Mader's Restaurant", "Blue's Egg", "AJ Bombers"]
    let mkeTransport = ["Milwaukee County Transit System", "Olaa Taxi Milwaukee", "Enterprise Rent-A-Car"]
    let mkeFun = ["Milwaukee County Zoo", "Pabst Mansion", "Mitchell Park Horticultural Conservatory"]

    let eagleFood = ["Knucklehead Pub", "Hen House Cafe", "Fork in the Road"]
    let eagleTransport = ["Uber or Lyft", "RydePass LLC", "Yellow Discount Cab"]
    let eagleFun = ["Old World Wisconsin", "Paradise Springs Nature Trail", "Kettle Moraine Ranch"]

    let barabooFood = ["Log Cabin Family Restaurant", "Cheeze Factory Restaurant", "Baraboo Burger Company"]
    let barabooTransport = ["Lamers Bus Lines", "Greyhound Bus", "Kobussen Buses, Ltd."]
    let barabooFun = ["International Crane Foundation", "Circus World Museum", "Devil's Lake State Park"]

//Function for picking a location randomly from locations array:    
function pickTrip(randomLocation) {
let i = Math.floor(Math.random() * randomLocation.length);
return (randomLocation[i]);
}

let chosenLocale = pickTrip(locations); {
    console.log("You're going on a day trip to ", chosenLocale);
}
