const logIn = document.getElementById('login');
const logInToggle = document.getElementById('loginToggle');
const signUp = document.getElementById('signUp');
const registerToggle = document.getElementById('registerToggle');

// Show Sign-Up form and hide Login form
registerToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page reload
    signUp.style.display = 'block';
    logIn.style.display = 'none';
});

// Show Login form and hide Sign-Up form
logInToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent page reload
    logIn.style.display = 'block';
    signUp.style.display = 'none';
});
