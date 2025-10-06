// Get references to the form and output elements
const form = document.getElementById('nameForm');
const output = document.getElementById('fizzbuzzOutput');
const greeting = document.getElementById('greeting');

// Listen for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get the user's name
  const firstName = document.getElementById('first_name').value;
  const middleInitial = document.getElementById('middle_initial').value;
  const lastName = document.getElementById('last_name').value;

  // Update the greeting
  let fullName = firstName;
  if (middleInitial) fullName += ' ' + middleInitial + '.';
  fullName += ' ' + lastName;
  greeting.textContent = `Hello, ${fullName}! Welcome to Hakima’s Hardworking Kangaroo!`;

  // Generate FizzBuzz
  let result = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      result += 'FizzBuzz\n';
    } else if (i % 3 === 0) {
      result += 'Fizz\n';
    } else if (i % 5 === 0) {
      result += 'Buzz\n';
    } else {
      result += i + '\n';
    }
  }

  // Show the FizzBuzz result
  output.textContent = result;
});
