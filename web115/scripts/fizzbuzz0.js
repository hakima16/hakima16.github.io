// Simple FizzBuzz script

// Run when the form is submitted
document.getElementById("nameForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Get user input
  var firstName = document.getElementById("first_name").value;
  var middleInitial = document.getElementById("middle_initial").value;
  var lastName = document.getElementById("last_name").value;

  // Build greeting
  var greeting = "Welcome to Hakima’s Hardworking Kangaroo";
  if (firstName) {
    greeting += " " + firstName;
    if (middleInitial) {
      greeting += " " + middleInitial + ".";
    }
    if (lastName) {
      greeting += " " + lastName;
    }
    greeting += "!";
  }

  // Display greeting
  document.getElementById("greeting").innerText = greeting;

  // Ask for number limit
  var limit = prompt("How high do you want to count, " + (firstName || "guest") + "?");

  // Validate number
  if (!limit || isNaN(limit)) {
    alert("Please enter a valid number!");
    return;
  }

  limit = parseInt(limit);

  // Generate FizzBuzz output
  var output = "";
  for (var i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      output += i + " - FizzBuzz\n";
    } else if (i % 3 === 0) {
      output += i + " - Fizz\n";
    } else if (i % 5 === 0) {
      output += i + " - Buzz\n";
    } else {
      output += i + "\n";
    }
  }

  // Show FizzBuzz on page
  document.getElementById("fizzbuzzOutput").textContent = output;
};
