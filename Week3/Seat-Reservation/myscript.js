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

rows.forEach(function (row) {
  html += `<div class ="label">${row}</div>`;
  for (let i = 0; i < 3; i++) {
    html += `<div id="${row + counter}">${counter}</div>`;
    counter++;
  }
  counter = counter + 12;
});
document.getElementById("left").innerHTML = html;

html = "";
counter = 1;

rows.forEach(function (row) {
  counter = counter + 12;
  for (let i = 0; i < 3; i++) {
    html += `<div id ="${row + counter}">${counter}</div>`;
    counter++;
  }
  html += `<div class = "label">${row}</div>`;
});
document.getElementById("right").innerHTML = html;
