// fizzbuzz0.js

// Run when the form is submitted
document.getElementById("nameForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent page reload

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

  // Generate Themed FizzBuzz0 output
  var output = "";
  for (var i = 1; i <= limit; i++) {
    // Define themed words
    var themedWords = "Glazed Glory"; // you can choose another theme
    // Determine if even or odd
    var evenOdd = (i % 2 === 0) ? "even" : "odd";

    // Add to output
    output += i + ") " + themedWords + " - the number is " + evenOdd + "\n";
  }

  // Show output on page
  document.getElementById("fizzbuzzOutput").textContent = output;
};
