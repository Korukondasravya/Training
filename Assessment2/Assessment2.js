document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password === '123@') {
      window.location.href = 'https://www.youtube.com';
    } else {
      alert('Invalid password. Please try again.');
      location.reload();
    }
  });