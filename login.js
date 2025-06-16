 const form = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    const storedUserData = localStorage.getItem(email);
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const hashedPassword = btoa(password);
      if (userData.password === hashedPassword) {
        messageDiv.innerText = 'Login successful!';
        messageDiv.style.color = 'green';
      } else {
        messageDiv.innerText = 'Invalid password.';
        messageDiv.style.color = 'red';
      }
    } else {
      messageDiv.innerText = 'User not found.';
      messageDiv.style.color = 'red';
    }
  } else {
    messageDiv.innerText = 'Please fill in all fields.';
    messageDiv.style.color = 'red';
  }
});
