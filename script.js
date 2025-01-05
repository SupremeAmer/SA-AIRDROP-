// Get the username element
const usernameElement = document.querySelector('.username');

// Get the total points element
const totalPointsElement = document.querySelector('.total-points');

// Get the connect button element
const connectButton = document.querySelector('.connect-button');

// Initialize the total points to 0
let totalPoints = 0;

// Function to update the total points
function updateTotalPoints(points) {
  totalPoints += points;
  totalPointsElement.textContent = `Total $SA Points: ${totalPoints}`;
}

// Function to handle the connect button click
function handleConnectButtonClick() {
  // TO DO: Implement MetaMask SDK logic to connect wallet
  console.log('Connect button clicked!');
}

// Add event listener to the connect button
connectButton.addEventListener('click', handleConnectButtonClick);

// TO DO: Implement logic to update the username and total points


// Get the coin icon element
const coinIcon = document.querySelector('.coin-icon');

// Animate the coin icon
coinIcon.addEventListener('animationiteration', () => {
  coinIcon.style.transform = 'rotateY(0deg)';
});

// Function to update the username
function updateUsername(username) {
  usernameElement.textContent = `Username: ${username}`;
}

// Function to handle the task button click
function handleTaskButtonClick() {
  console.log('Task button clicked!');
}

// Get the task button element
const taskButton = document.querySelector('.task-button');

// Add event listener to the task button
taskButton.addEventListener('click', handleTaskButtonClick);

// Function to handle the boast button click
function handleBoastButtonClick() {
  console.log('Boast button clicked!');
}

// Get the boast button element
const boastButton = document.querySelector('.boast-button');

// Add event listener to the boast button
boastButton.addEventListener('click', handleBoastButtonClick);

// Function to handle the home button click
function handleHomeButtonClick() {
  console.log('Home button clicked!');
}

// Get the home button element
const homeButton = document.querySelector('.home-button');

// Add event listener to the home button
homeButton.addEventListener('click', handleHomeButtonClick);
