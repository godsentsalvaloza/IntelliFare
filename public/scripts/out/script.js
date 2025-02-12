"use strict";
// Constant and variable declarations
const rushHourIndicator = document.querySelector("#rush-hour");
const test = document.querySelector("#text-fare");
const testDiscount = document.querySelector("#textDiscount");
const travelTime = document.querySelector("#travelTime");
const distanceInfo = document.querySelector("#distance-info");
const baseFare = Number(document.querySelector("#base_fare"));
let stationIndex = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1,
];
let startStation = 0;
let endStation = 0;
let distance = 0;
let regularFare = 0;
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

// Example usage
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
  // Logic for computing the regular fare
  if (distance <= 4) {
    regularFare = 13;
  } else if (distance == 5) {
    regularFare = 15;
  } else if (distance == 6) {
    regularFare = 17;
  } else if (distance == 7) {
    regularFare = 19;
  } else if (distance == 8) {
    regularFare = 21;
  } else if (distance == 9) {
    regularFare = 23;
  } else if (distance == 10) {
    regularFare = 25;
  } else if (distance == 11) {
    regularFare = 27;
  } else if (distance == 12) {
    regularFare = 29;
  } else if (distance == 13) {
    regularFare = 31;
  } else if (distance == 14) {
    regularFare = 33;
  } else if (distance >= 15) {
    regularFare = 35;
  }
  // 20% discounted fare
  discountedFare = Math.ceil(regularFare * 0.8);
  // logic for computing travel time
  switch (distance) {
    case 0:
      travel = 2;
      maxTravel = 4;
      break;
    case 1:
      travel = 4;
      maxTravel = 7;
      break;
    case 2:
      travel = 8;
      maxTravel = 12;
      break;
    case 3:
      travel = 12;
      maxTravel = 15;
      break;
    case 4:
      travel = 16;
      maxTravel = 19;
      break;
    case 5:
      travel = 20;
      maxTravel = 24;
      break;
    case 6:
      travel = 24;
      maxTravel = 29;
      break;
    case 7:
      travel = 28;
      maxTravel = 32;
      break;
    case 8:
      travel = 32;
      maxTravel = 36;
      break;
    case 9:
      travel = 36;
      maxTravel = 41;
      break;
    case 10:
      travel = 40;
      maxTravel = 45;
      break;
    case 11:
      travel = 44;
      maxTravel = 50;
      break;
    case 12:
      travel = 48;
      maxTravel = 53;
      break;
    case 13:
      travel = 52;
      maxTravel = 58;
      break;
    case 14:
      travel = 56;
      maxTravel = 64;
      break;
    case 15:
      travel = 60;
      maxTravel = 68;
      break;
  }
  // Returns the values to the HTML document if the elements are found
  if (test && testDiscount && travelTime) {
    distanceInfo.textContent = distance + "KM";
    test.textContent = "₱" + regularFare;
    testDiscount.textContent = "₱" + discountedFare;
    travelTime.textContent = travel + " Minutes - " + maxTravel + " Minutes";
  }
}
