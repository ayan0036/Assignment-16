 const form = document.getElementById('register-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name && email && password) {
    const hashedPassword = btoa(password); // Simple hashing for simulation
    const userData = {
      name,
      password: hashedPassword,
    };

    localStorage.setItem(email, JSON.stringify(userData));
    messageDiv.innerText = 'Registration successful!';
    messageDiv.style.color = 'green';
    form.reset();
  } else {
    messageDiv.innerText = 'Please fill in all fields.';
    messageDiv.style.color = 'red';
  }
});
