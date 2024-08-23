let table = document.querySelector("#timetable");

let tableOf;

do {
  tableOf = prompt("Enter a number:");
} while (isNaN(tableOf) || tableOf.trim() === "");

table.innerHTML = "";

for (let i = 1; i <= 10; i++) {
  const message = `${tableOf} X ${i} = ${tableOf * i}`;
  table.innerHTML += `${message} <br>`;
}