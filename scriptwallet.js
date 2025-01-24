window.onload = function() {
startAutoBalance();
};

function startAutoBalance() {
let balance = 0;
const interval = 1000; // 1 second
setInterval(function() {
balance += 1; // Add 1 to the balance every second
document.getElementById('home-balance-amount').textContent = balance.toString();
}, interval);
}

document.getElementById('withdrawal-btn').addEventListener('click', function() {
// TO DO: Implement withdrawal logic here
alert('Withdrawal button clicked!');
});

document.getElementById('home-btn').addEventListener('click', function() {
// TO DO: Implement home button logic here
alert('Home button clicked!');
});

document.getElementById('connect-btn').addEventListener('click', function() {
// TO DO: Implement connect button logic here
alert('Connect button clicked!');
});

document.getElementById('home-balance-amount').textContent = balance.toString();
}, interval);
}

document.getElementById('withdrawal-btn').addEventListener('click', function() {
// TO DO: Implement withdrawal logic here
alert('Withdrawal button clicked!');
});

document.getElementById('home-btn').addEventListener('click', function() {
// TO DO: Implement home button logic here
alert('Home button clicked!');
});

document.getElementById('connect-btn').addEventListener('click', function() {
// TO DO: Implement connect button logic here
alert('Connect button clicked!');
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
