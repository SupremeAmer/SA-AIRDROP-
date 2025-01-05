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

let coinInterval;
let timeRemaining = 5 * 60 * 60 * 1000; // 5 hours
let coinEarned = 0;
let isHolding = false;
let startTime;
let countdownInterval;

document.getElementById('task-button').addEventListener('click', () => {
  document.getElementById('coin-icon').addEventListener('mousedown', () => {
    if (timeRemaining <= 0) {
      isHolding = true;
      startTime = Date.now();
      coinInterval = setInterval(() => {
        if (isHolding && Date.now() - startTime < 20 * 1000) {
          coinEarned += 500;
        } else {
          clearInterval(coinInterval);
        }
      }, 5000);
    }
  });

  document.getElementById('coin-icon').addEventListener('mouseup', () => {
    isHolding = false;
    clearInterval(coinInterval);
    timeRemaining = 5 * 60 * 60 * 1000; // 5 hours
    startCountdown();
    updateCoinBalance();
  });
});

function startCountdown() {
  countdownInterval = setInterval(() => {
    timeRemaining -= 1000;
    document.getElementById('time-remaining').textContent = `Time remaining: ${formatTime(timeRemaining)}`;
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('coin-icon').style.cursor = 'pointer';
    } else {
      document.getElementById('coin-icon').style.cursor = 'not-allowed';
    }
  }, 1000);
}

function formatTime(time) {
  const hours = Math.floor(time / (60 * 60 * 1000));
  const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((time % (60 * 1000)) / 1000);
  return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

function updateCoinBalance() {
  document.getElementById('coin-earned').textContent = coinEarned;
}

startCountdown();
