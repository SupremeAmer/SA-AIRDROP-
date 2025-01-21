// Get the mining button
const miningButton = document.getElementById('mining-button');

// Get the home balance amount element
const homeBalanceAmount = document.getElementById("#home-balance-amount");

// Get the energy discharge container
const energyDischargeContainer = document.querySelector('.energy-discharge-container');

// Get the energy discharge element
const energyDischarge = document.querySelector('.energy-discharge');

// Get the time remaining element
const timeRemaining = document.getElementById('time-remaining');

// Get the mining status element
const miningStatus = document.getElementById('mining-status');

// Set the initial home balance amount
let homeBalance = 0;

// Set the initial mining status
let mining = false;

// Set the initial time remaining
let timeRemainingSeconds = 86400; // 24 hours

// Function to update the home balance amount
function updateHomeBalance() {
    homeBalanceAmount.textContent = homeBalance.toFixed(4);
}

// Function to update the energy discharge
function updateEnergyDischarge() {
    energyDischarge.style.width = `${(timeRemainingSeconds / 86400) * 100}%`;
}

// Function to update the time remaining
function updateTimeRemaining() {
    const hours = Math.floor(timeRemainingSeconds / 3600);
    const minutes = Math.floor((timeRemainingSeconds % 3600) / 60);
    const seconds = timeRemainingSeconds % 60;
    timeRemaining.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start mining
function startMining() {
    mining = true;
    miningStatus.textContent = 'Mining...';
    miningButton.textContent = 'Stop Mining';
    const intervalId = setInterval(() => {
        
      if (mining) {
            homeBalance += 0.0002;
            updateHomeBalance();
            timeRemainingSeconds -= 1;
            updateTimeRemaining();
            updateEnergyDischarge();
            if (timeRemainingSeconds <= 0) {
                mining = false;
                miningStatus.textContent = 'Mining stopped.';
                miningButton.textContent = 'Start Mining';
                clearInterval(intervalId);
            }
        }
    }, 1000);
}

// Add event listener to mining button
miningButton.addEventListener('click', () => {
    if (mining) {
        mining = false;
        miningStatus.textContent = 'Mining stopped.';
        miningButton.textContent = 'Start Mining';
    } else {
        startMining();
    }
});

// Initialize energy discharge container
energyDischargeContainer.style.display = 'none';

// Add event listener to energy button
document.getElementById('energy-button').addEventListener('click', () => {
    energyDischargeContainer.style.display = 'block';
});

