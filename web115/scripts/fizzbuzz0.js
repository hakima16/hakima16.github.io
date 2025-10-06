document.addEventListener('DOMContentLoaded', function() {
  includeHTML(function() {
    const form = document.getElementById('nameForm');
    if (!form) return; // only run if form exists

    const output = document.getElementById('fizzbuzzOutput');
    const greeting = document.getElementById('greeting');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const firstName = document.getElementById('first_name').value;
      const middleInitial = document.getElementById('middle_initial').value;
      const lastName = document.getElementById('last_name').value;

      let fullName = firstName;
      if (middleInitial) fullName += ' ' + middleInitial + '.';
      fullName += ' ' + lastName;
      greeting.textContent = `Hello, ${fullName}! Welcome to Hakima’s Hardworking Kangaroo!`;

      let result = '';
      for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) result += 'FizzBuzz\n';
        else if (i % 3 === 0) result += 'Fizz\n';
        else if (i % 5 === 0) result += 'Buzz\n';
        else result += i + '\n';
      }
      output.textContent = result;
    });
  });
});



