window.onload = function() {
updateWalletBalance();
setInterval(updateWalletBalance, 1000);
};

function updateWalletBalance() {
const homeBalance = document.getElementById('home-balance-amount').textContent;
const walletBalance = document.getElementById('wallet-mining-balance');
walletBalance.textContent = `$SA: ${homeBalance}`;
}

document.getElementById('withdrawal-btn').addEventListener('click', function() {
// TO DO: Implement withdrawal logic here
alert('Withdrawal button clicked!');
});

document.getElementById('home-btn').addEventListener('click', function() {
// TO DO: Implement home button logic here
alert('Home button clicked!');
// You can also redirect to home page using:
// window.location.href = 'Task.html';
});

document.getElementById('connect-btn').addEventListener('click', function() {
// TO DO: Implement connect button logic here
alert('Connect button clicked!');
// You can also implement connection logic here
});

document.getElementById('home-btn').addEventListener('click', function() {
// Redirect to home page
window.location.href = 'Task.html';
});

document.getElementById('connect-btn').addEventListener('click', function() {
// Implement connection logic here
// For example, you can show a modal or a popup to connect to a wallet
alert('Connect to a wallet to continue...');
// You can also use a library like Web3.js to connect to a wallet
});
