var reservedSeats = {
  record1: {
    seat: "b19",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record2: {
    seat: "b20",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record3: {
    seat: "b21",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
  record4: {
    seat: "b22",
    owner: {
      fname: "Joe",
      lname: "Smith",
    },
  },
};

// let html = "";
// let counter = 1;

// rows.forEach(function (row) {
//   html += `<div class ="label">${row}</div>`;
//   for (let i = 0; i < 3; i++) {
//     html += `<div id="${row + counter}">${counter}</div>`;
//     counter++;
//   }
//   counter = counter + 12;
// });
// document.getElementById("left").innerHTML = html;

// html = "";
// counter = 1;

// rows.forEach(function (row) {
//   counter = counter + 12;
//   for (let i = 0; i < 3; i++) {
//     html += `<div id ="${row + counter}">${counter}</div>`;
//     counter++;
//   }
//   html += `<div class = "label">${row}</div>`;
// });
// document.getElementById("right").innerHTML = html;

// html = "";
// counter = 1;

// rows.forEach(function (row) {
//   counter = counter + 3;
//   for (let i = 0; i < 9; i++) {
//     html += `<div id="${row + counter}">${counter}</div>`;
//     counter++;
//   }
//   counter = counter + 3;
// });
// document.getElementById("middle").innerHTML = html;

//Another way to do it(refactoring code)

function makeRows(sectionLength, rowLength, placement) {
  const rows = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
  ];

  let html = "";
  let counter = 1;
  //for each row...
  rows.forEach((row) => {
    switch (placement) {
      case "left":
        html += `<div class ="label">${row}</div>`;
        break;
      // add label to div on left side of row
      case "right":
        counter = counter + (rowLength - sectionLength);
        break; // add 12 to the counter
      default:
        counter = counter + (rowLength - sectionLength) / 2;
        break; // add three to the counter
    }
    for (let i = 0; i < sectionLength; i++) {
      html += `<div class="a" id="${row + counter}">${counter}</div>`;
      counter++;
    }

    switch (placement) {
      case "left":
        counter = counter + (rowLength - sectionLength);
        break;
      case "right":
        html += `<div class ="label">${row}</div>`;
        break;
      default:
        counter = counter + (rowLength - sectionLength) / 2;
        break;
    }
  });

  document.getElementById(placement).innerHTML = html;
  //if I am on the left, right or center... do the thing.

  // loop through seats for that section

  //If I am on the left, right or center section, do the right thing...
}

makeRows(3, 15, "left");
makeRows(3, 15, "right");
makeRows(9, 15, "middle");

(function () {
  "use strict";
  for (const key in reservedSeats) {
    if (reservedSeats.hasOwnProperty(key)) {
      const obj = reservedSeats[key];

      document.getElementById(obj.seat).className = "r";
      document.getElementById(obj.seat).innerHTML = "R";
    }
  }
})();

(function () {
  "use strict";

  var selectedSeats = [];
  var seats = document.querySelectorAll(".a");
  //click handler to each seat with class of a
  seats.forEach((seat) => {
    seat.addEventListener("click", () => {
      seatSelectionActive(seat.id); //get id of seat clicked
      console.log(selectedSeats);
    });
  });
  //function when someone clicks on the seat.
  function seatSelectionActive(thisSeat) {
    var index = selectedSeats.indexOf(thisSeat);
    if (index > -1) {
      selectedSeats.splice(index, 1);
      document.getElementById(thisSeat).className = "a";
    } else {
      document.getElementById(thisSeat).className = "s";
      selectedSeats.push(thisSeat); //run a function that adds to arr
    }
  }

  function manageConfirmForm() {
    if (selectedSeats.length > 0) {
        document.getElementById('confirmres').style.display = "block";
    }
  } else {
    document.getElementById('confirmres').style.display = "none"
  }
})();

document.getElementById("reserve").addEventListener("click", (e) => {
  document.getElementById("resform").style.display = "block";
  e.preventDefault();
});

document.getElementById("cancel").addEventListener("click", (e) => {
  document.getElementById("resform").style.display = "none";
  e.preventDefault();
});

