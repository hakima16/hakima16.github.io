function checkDivision(num, divisor) {
  return num % divisor === 0;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

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
    greetingElement.textContent = `Welcome, ${fullName}!`;

    const divisors = [
      { number: parseInt(document.getElementById("div1").value, 10), word: document.getElementById("word1").value, className: "fizz" },
      { number: parseInt(document.getElementById("div2").value, 10), word: document.getElementById("word2").value, className: "buzz" },
      { number: parseInt(document.getElementById("div3").value, 10), word: document.getElementById("word3").value, className: "bang" }
    ];

    const total = parseInt(document.getElementById("total").value, 10);
    const defaultWord = document.getElementById("defaultWord").value;

    if (divisors.some(d => isNaN(d.number) || d.number <= 0)) {
      alert("All divisors must be positive numbers.");
      return;
    }
    if (isNaN(total) || total <= 0) {
      alert("Total count must be a positive number.");
      return;
    }

    // Generate creative output
    outputElement.innerHTML = ""; // Clear previous output
    for (let i = 1; i <= total; i++) {
      let result = "";
      let classes = [];

      divisors.forEach(d => {
        if (checkDivision(i, d.number)) {
          result += d.word + " ";
          classes.push(d.className);
        }
      });

      if (!result) result = defaultWord;

      const span = document.createElement("div");
      span.className = "output-item " + classes.join(" ");
      span.textContent = result.trim();
      outputElement.appendChild(span);
    }
  });
});
