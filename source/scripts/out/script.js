"use strict";
// test;
const djhduifhdifu = "\x69\x6E\x74\x65\x6C\x6C\x69\x66\x61\x72\x65\x30\x78";
let x = prompt("Shhh.. Don't leak our hard work... \n please enter password");
if (x != djhduifhdifu) {
    document.body.style.color = "white";
    document.body.innerHTML = "Wrong password. hehe~";
}
let numberOfKilometer = 15;
let minimumFare = 13; // Original minimum fare
let succeedingKilometer = 2; // Fare per succeeding kilometer
// Calculate original fare
let fareOriginal = minimumFare;
for (let x = 5; x <= numberOfKilometer; x++) {
    fareOriginal += succeedingKilometer;
}
// Calculate discounted fare (subtract 20% from the original fare)
let fareDiscounted = Math.ceil(fareOriginal * 0.8);
console.log("Original fare for 8 km: " + fareOriginal);
console.log("Discounted fare (20% off) for 8 km: " + fareDiscounted);
// Type annotations for elements, assuming they exist
const test = document.querySelector("#text-fare");
const testDiscount = document.querySelector("#textDiscount");
const travelTime = document.querySelector("#travelTime");
// Constant and variable declarations with types
const baseFare = 13;
let stationIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let startStation = 0;
let endStation = 0;
let distance = 0;
let regularFare = 0;
let discountedFare = 0;
let travel = 0;
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
    }
    else if (startStation < endStation) {
        // Ascending stations
        for (let i = startStation; i < endStation; i++) {
            distance += stationIndex[i];
        }
    }
    else {
        // Descending stations
        for (let i = startStation - 1; i >= endStation; i--) {
            distance += stationIndex[i];
        }
    }
    // Logic for computing the regular fare
    if (distance === 0) {
        regularFare = 0;
    }
    else if (distance <= 4) {
        regularFare = 13;
    }
    else if (distance == 5) {
        regularFare = 15;
    }
    else if (distance == 6) {
        regularFare = 17;
    }
    else if (distance == 7) {
        regularFare = 19;
    }
    else if (distance == 8) {
        regularFare = 21;
    }
    else if (distance == 9) {
        regularFare = 23;
    }
    else if (distance == 10) {
        regularFare = 25;
    }
    else if (distance == 11) {
        regularFare = 27;
    }
    else if (distance == 12) {
        regularFare = 29;
    }
    else if (distance == 13) {
        regularFare = 31;
    }
    else if (distance == 14) {
        regularFare = 33;
    }
    else if (distance >= 15) {
        regularFare = 35;
    }
    discountedFare = Math.ceil(regularFare * 0.8);
    //   // Logic for computing the discounted fare
    //   if (distance === 0) {
    //     discountedFare = 0;
    //   } else if (distance <= 2) {
    //     discountedFare = baseFare - 3;
    //   } else if (distance <= 4) {
    //     discountedFare = baseFare;
    //   } else if (distance <= 7) {
    //     discountedFare = baseFare + 3;
    //   } else if (distance <= 10) {
    //     discountedFare = baseFare + 6;
    //   } else if (distance <= 12) {
    //     discountedFare = baseFare + 9;
    //   }
    // logic for computing travel time
    //   switch (distance) {
    //     case 0:
    //       travel = 0;
    //       break;
    //     case 1:
    //       travel = 3;
    //       break;
    //     case 2:
    //       travel = 6;
    //       break;
    //     case 3:
    //       travel = 9;
    //       break;
    //     case 4:
    //       travel = 12;
    //       break;
    //     case 5:
    //       travel = 15;
    //       break;
    //     case 6:
    //       travel = 18;
    //       break;
    //     case 7:
    //       travel = 21;
    //       break;
    //     case 8:
    //       travel = 24;
    //       break;
    //     case 9:
    //       travel = 27;
    //       break;
    //     case 10:
    //       travel = 30;
    //       break;
    //     case 11:
    //       travel = 33;
    //       break;
    //     case 12:
    //       travel = 36;
    //       break;
    //   }
    // Returns the values to the HTML document if the elements are found
    if (test && testDiscount && travelTime) {
        test.textContent = "₱" + regularFare;
        testDiscount.textContent = "₱" + discountedFare;
        travelTime.textContent = "Coming Soon";
    }
}
