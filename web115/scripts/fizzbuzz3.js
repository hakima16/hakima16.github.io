function checkDivision(num, divisor) {
  return num % divisor === 0;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const greetingElement = document.getElementById("greeting");
    const outputElement = document.getElementById("fizzbuzzOutput");

    if (!firstName) {
      alert("Please enter your first name.");
      return;
    }

    let fullName = firstName;
    if (middleInitial) fullName += ` ${middleInitial}.`;
    if (lastName) fullName += ` ${lastName}`;
    greetingElement.textContent = `Welcome to Hakima’s Hardworking Kangaroo, ${fullName}!`;

    const limitInput = prompt(`How high do you want to count, ${firstName}?`);
    let limit = parseInt(limitInput, 10);

    if (isNaN(limit) || limit <= 0) {
      alert("Invalid input. Please enter a positive number.");
      return;
    }

    const divisors = [
      { number: 3, word: "Fizz" },
      { number: 5, word: "Buzz" },
      { number: 7, word: "BANG!" }
    ];

    let output = "";
    for (let i = 1; i <= limit; i++) {
      let result = "";

      divisors.forEach((div) => {
        if (checkDivision(i, div.number)) {
          result += div.word;
        }
      });

      if (!result) result = i;
      output += result + "\n";
    }

    outputElement.textContent = output;
  });
});
