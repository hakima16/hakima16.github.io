// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("nameForm");
  const output = document.getElementById("fizzbuzzOutput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get user input
    const first = document.getElementById("first_name").value.trim();
    const middle = document.getElementById("middle_initial").value.trim();
    const last = document.getElementById("last_name").value.trim();

    // Greeting
    output.textContent = `Hello ${first} ${middle} ${last}!\n\n`;

    // Theme words (easy to change)
    const word3 = "EEK!";
    const word5 = "SCREAM!";
    const normalWord = "boo!";

    // Loop from 1 to 140
    for (let i = 1; i <= 140; i++) {
      let msg = "";

      if (i % 3 === 0) msg += word3 + " ";
      if (i % 5 === 0) msg += word5 + " ";
      if (msg === "") msg = normalWord;

      output.textContent += `${i}. ${msg}\n`;
    }
  });
});
