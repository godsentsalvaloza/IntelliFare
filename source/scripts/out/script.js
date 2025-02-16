"use strict";
// Constant and variable declarations
const rushHourIndicator = document.querySelector("#rush-hour");
const test = document.querySelector("#text-fare");
const testDiscount = document.querySelector("#textDiscount");
const travelTime = document.querySelector("#travelTime");
const distanceInfo = document.querySelector("#distance-info");
let regularFare = Number(document.querySelector("#base_fare").innerHTML);
console.log(regularFare);
let stationIndex = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
];
let startStation = 0;
let endStation = 0;
let distance = 0;
let discountedFare = 0;
let travel = 0;
let maxTravel = 0;

// checks for rush hour
function isRushHour() {
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();

  // rush hours  (6-9 AM and 4-7 PM)
  const morningRush = hours >= 6 && hours < 9;
  const eveningRush = hours >= 16 && hours < 19;

  // Apply only on weekdays (Monday to Friday)
  if (morningRush || eveningRush) {
    return true;
  }
  return false;
}

function formatTravelTime(mins) {
  if (mins >= 60) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return minutes > 0
      ? `${hours} Hour and ${minutes} Minutes`
      : `${hours} Hour`;
  }
  return `${mins} Minutes`;
}

if (isRushHour()) {
  rushHourIndicator.style.display = "block";
} else {
  rushHourIndicator.style.display = "none";
}

// setter for departure
function setStartStation() {
  const selectElement = document.querySelector("#startOption");
  if (selectElement) {
    startStation = parseInt(selectElement.value, 10);
  }
}
// setter for arrival
function setEndStation() {
  const selectElement = document.querySelector("#endOption");
  if (selectElement) {
    endStation = parseInt(selectElement.value, 10);
  }
}
// function to calculate the fare
function calculate(startStation, endStation) {
  distance = 0; // Reset distance before calculating
  // checks the station order
  if (startStation === endStation) {
    distance = 0;
  } else if (startStation < endStation) {
    // Ascending stations
    for (let i = startStation; i < endStation; i++) {
      distance += stationIndex[i];
    }
  } else {
    // Descending stations
    for (let i = startStation - 1; i >= endStation; i--) {
      distance += stationIndex[i];
    }
  }
  console.log(distance);
  // Logic for computing the regular fare
  if (distance == 5) {
    regularFare += 2;
  } else if (distance == 6) {
    regularFare += 4;
  } else if (distance == 7) {
    regularFare += 6;
  } else if (distance == 8) {
    regularFare += 8;
  } else if (distance == 9) {
    regularFare += 10;
  } else if (distance == 10) {
    regularFare += 12;
  } else if (distance == 11) {
    regularFare += 14;
  } else if (distance == 12) {
    regularFare += 16;
  } else if (distance == 13) {
    regularFare += 18;
  } else if (distance == 14) {
    regularFare += 20;
  } else if (distance >= 15) {
    regularFare += 22;
  }
  // 20% discounted fare
  discountedFare = Math.ceil(regularFare * 0.8);
  // logic for computing travel time
  switch (distance) {
    case 0:
      travel = 4;
      maxTravel = 6;
      break;
    case 1:
      travel = 7;
      maxTravel = 11;
      break;
    case 2:
      travel = 11;
      maxTravel = 16;
      break;
    case 3:
      travel = 14;
      maxTravel = 22;
      break;
    case 4:
      travel = 18;
      maxTravel = 27;
      break;
    case 5:
      travel = 21;
      maxTravel = 33;
      break;
    case 6:
      travel = 25;
      maxTravel = 38;
      break;
    case 7:
      travel = 28;
      maxTravel = 44;
      break;
    case 8:
      travel = 32;
      maxTravel = 49;
      break;
    case 9:
      travel = 35;
      maxTravel = 55;
      break;
    case 10:
      travel = 39;
      maxTravel = 60;
      break;
    case 11:
      travel = 42;
      maxTravel = 66;
      break;
    case 12:
      travel = 46;
      maxTravel = 71;
      break;
    case 13:
      travel = 49;
      maxTravel = 77;
      break;
    case 14:
      travel = 53;
      maxTravel = 82;
      break;
    case 15:
      travel = 60;
      maxTravel = 90;
      break;
  }
  // Returns the values to the HTML document if the elements are found
  if (test && testDiscount && travelTime) {
    distanceInfo.textContent = distance + " KM";
    test.textContent = "₱" + regularFare;
    testDiscount.textContent = "₱" + discountedFare;
    travelTime.textContent = `${formatTravelTime(travel)} - ${formatTravelTime(
      maxTravel
    )}`;
  }
}
