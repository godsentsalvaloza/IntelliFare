// Constant and variable declarations
const test = document.querySelector("#text-fare") as HTMLElement | null;
const testDiscount = document.querySelector(
  "#textDiscount"
) as HTMLElement | null;
const travelTime = document.querySelector("#travelTime") as HTMLElement | null;

const baseFare: number = 13;
let stationIndex: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let startStation: number = 0;
let endStation: number = 0;
let distance: number = 0;
let regularFare: number = 0;
let discountedFare: number = 0;
let travel: number = 0;

// setter for departure
function setStartStation(): void {
  const selectElement = document.querySelector(
    "#startOption"
  ) as HTMLSelectElement | null;
  if (selectElement) {
    startStation = parseInt(selectElement.value, 10);
  }
}

// setter for arrival
function setEndStation(): void {
  const selectElement = document.querySelector(
    "#endOption"
  ) as HTMLSelectElement | null;
  if (selectElement) {
    endStation = parseInt(selectElement.value, 10);
  }
}

// function to calculate the fare
function calculate(startStation: number, endStation: number): void {
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
      break;
    case 1:
      travel = 4;
      break;
    case 2:
      travel = 8;
      break;
    case 3:
      travel = 12;
      break;
    case 4:
      travel = 16;
      break;
    case 5:
      travel = 20;
      break;
    case 6:
      travel = 24;
      break;
    case 7:
      travel = 28;
      break;
    case 8:
      travel = 32;
      break;
    case 9:
      travel = 36;
      break;
    case 10:
      travel = 40;
      break;
    case 11:
      travel = 44;
      break;
    case 12:
      travel = 48;
      break;
    case 13:
      travel = 52;
      break;
    case 14:
      travel = 56;
      break;
    case 15:
      travel = 60;
      break;
  }

  // Returns the values to the HTML document if the elements are found
  if (test && testDiscount && travelTime) {
    test.textContent = "₱" + regularFare;
    testDiscount.textContent = "₱" + discountedFare;
    travelTime.textContent = travel + " Minutes";
  }
}
