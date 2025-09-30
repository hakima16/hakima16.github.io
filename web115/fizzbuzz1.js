// fizzbuzz1.js

document.getElementById("nameForm").onsubmit = function(event) {
  event.preventDefault();

  // Collect name values
  let first = document.getElementById("first_name").value;
  let middle = document.getElementById("middle_name").value;
  let last = document.getElementById("last_name").value;

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<h3>Hello ${first} ${middle} ${last}!</h3><ol></ol>`;
  let list = outputDiv.querySelector("ol");

  // Theme words (easy to change)
  let word3 = "EEK!";
  let word5 = "SCREAM!";
  let normalWord = "boo!";

  for (let i = 1; i <= 140; i++) {
    let message = "";

    if (i % 3 === 0) message += word3 + " ";
    if (i % 5 === 0) message += word5 + " ";

    // If not divisible by 3 or 5, use normal word
    if (message === "") message = normalWord;

    // Add list item
    let li = document.createElement("li");
    li.textContent = `${i}. ${message}`;
    list.appendChild(li);
  }
};
