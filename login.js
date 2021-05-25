const button = document.getElementById('logIn-button');  

button.addEventListener('click', () => {
    const logInModal = document.getElementById('log-in-modal');
    logInModal.style.display = 'block'; 
})
const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
    const logInModal = document.getElementById('log-in-modal');
    logInModal.style.display = 'none'; 
})