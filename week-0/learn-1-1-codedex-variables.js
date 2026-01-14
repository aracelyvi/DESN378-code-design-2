// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Aracely Vidrios]
// Date: [1/14/25]
// ============================================
​
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const firstName = "Aracely";
const favoriteColor = "Navy Blue";

let currentLocation = "Spokane";
let mood = "Tired";

console.log("My Profile: ");
console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood);

currentLocation = "Cheney";
mood = "Very Tired";
console.log(currentLocation);
console.log(mood);​​
​
​
// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
let companyName = "Studio INC";
console.log(companyName)

let yearFounded = 1975;
console.log(yearFounded);

let inOffice = true;
console.log(inOffice);

let lunchEnd; 
console.log(lunchEnd);   ​
​​
​
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let fahrenheit = 100;
let celsius = (fahrenheit - 32) / 1.8;

console.log(celsius);     ​
​​
​
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
let billAmount = 50;
const tipPercent = 0.2;
tipAmount = billAmount * (tipPercent / 100)
total = billAmount + tipAmount
    
console.log("==============================");
console.log("      Restaurant Receipt      ");
console.log("------------------------------");
console.log("        Order Details         ");
console.log("------------------------------");
console.log("Item                     Price");
console.log("------------------------------");
console.log("Steak                   18.00 ");
console.log("Mashed Potatoes         16.00 ");
console.log("Drink                   16.00 ");
console.log("------------------------------");
console.log("Total                     "+ tipAmount);
console.log("Total                    "+ total);
console.log("==============================");​
​
​
​
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
let playlistSongs = 200;
const songLength = 3;

let totalPlaylistMin = playlistSongs * songLength;


totalPlaylistHours = totalPlaylistMin / 60


console.log("==============================");
console.log("|         Music Stats        |");
console.log("------------------------------");
console.log("|Songs In Playlist        "+playlistSongs+"|");
console.log("|Average Song Length        "+songLength+"|");
console.log("|Playlist Duration(min)   "+totalPlaylistMin+"|");
console.log("|Playlist Duration(hr)     " +totalPlaylistHours+"|");
console.log("==============================");
