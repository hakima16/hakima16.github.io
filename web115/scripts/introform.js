const form = document.getElementById('introForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const background = document.getElementById('background').value;
  const education = document.getElementById('education').value;
  const courses = document.getElementById('courses').value.split(',').map(c => c.trim());
  const skills = document.getElementById('skills').value;

  // Build output HTML
  let html = `<div class="intro-output">`;
  html += `<h2>${fullname}</h2>`;
  html += `<ul class="profile-list">`;
  html += `<li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>`;
  html += `<li><strong>Phone:</strong> ${phone}</li>`;
  html += `<li><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></li>`;
  html += `<li><strong>Professional Background:</strong> ${background}</li>`;
  html += `<li><strong>Education:</strong> ${education}</li>`;
  html += `<li><strong>Courses:</strong><ul class="nested-list">`;
  courses.forEach(course => { html += `<li>${course}</li>`; });
  html += `</ul></li>`;
  html += `<li><strong>Skills/Certifications:</strong> ${skills}</li>`;
  html += `</ul>`;
  html += `</div>`;

  output.innerHTML = html;
});
