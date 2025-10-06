// Function to check divisibility
function checkDivision(num, divisor) {
  return num % divisor === 0;
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Form submit event
  document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    // Get user input
    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const greetingElement = document.getElementById("greeting");
    const outputElement = document.getElementById("fizzbuzzOutput");

    if (!firstName) {
      alert("Please enter your first name.");
      return;
    }

    // Build greeting
    let fullName = firstName;
    if (middleInitial) fullName += ` ${middleInitial}.`;
    if (lastName) fullName += ` ${lastName}`;
    greetingElement.textContent = `Welcome to Hakima’s Hardworking Kangaroo, ${fullName}!`;

    // Ask for counting limit
    let limitInput = prompt(`How high do you want to count, ${firstName}?`);
    let limit = parseInt(limitInput, 10);

    if (isNaN(limit) || limit <= 0) {
      alert("Invalid input. Please enter a positive number.");
      return;
    }

    // Divisors and words
    const divisors = [
      { number: 3, word: "Fizz" },
      { number: 5, word: "Buzz" },
      { number: 7, word: "BANG!" }
    ];

    // Generate FizzFazzBang output
    let output = "";
    for (let i = 1; i <= limit; i++) {
      let result = "";
      divisors.forEach((div) => {
        if (checkDivision(i, div.number)) result += div.word;
      });
      if (!result) result = i;
      output += result + "\n";
    }

    // Display output
    outputElement.textContent = output;
  });
});

