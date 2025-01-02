/ script.js

// Initialize total coins to 0
let totalCoins = 0;

// Update total coins display
document.getElementById('total-coins').innerText = `Total Coins: ${totalCoins}`;

// Task button click event listener
document.getElementById('task-button').addEventListener('click', () => {
    // Simulate task completion and update total coins
    totalCoins += 100;
    document.getElementById('total-coins').innerText = `Total Coins: ${totalCoins}`;
});

// Username display
document.getElementById('username').innerText = 'SupremeAmerUser';
