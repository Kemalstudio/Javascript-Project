// Display UI and welcome message
// Display UI a

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

const transactions = [200, -100, 340, -300, -20, 50, 400, -460];

console.log(transactions.some(trans => trans === 50));


const someDeeperArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];