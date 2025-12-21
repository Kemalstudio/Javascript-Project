// Display UI and welcome message
// Dis

butonLogin.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
    }
    console.log('Login attempt with username:', username);
});

const butonLogin = document.getElementById('loginButton');
if (butonLogin) {
    butonLogin.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            alert('Login successful!');
        }
        console.log('Login attempt with username:', username);
    });
}