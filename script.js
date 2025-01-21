const miningButton = document.getElementById('mining-button');
const homeBalanceAmount = document.getElementById('home-balance-amount');
const energyDischargeContainer = document.querySelector('.energy-discharge-container');
const energyDischarge = document.querySelector('.energy-discharge');
const timeRemaining = document.getElementById('time-remaining');
const miningStatus = document.getElementById('mining-status');

let homeBalance = 0;
let mining = false;
let timeRemainingSeconds = 86400; 
let intervalId;

miningButton.style.background = '#4CAF50';
miningButton.style.color = '#fff';

miningButton.addEventListener('click', () => {
  if (mining) {
    stopMining();
  } else {
    startMining();
  }
});

function startMining() {
  mining = true;
  miningStatus.textContent = 'Mining...';
  miningStatus.style.color = 'green';
  miningButton.textContent = 'Stop Mining';
  miningButton.style.background = 'red';
  intervalId = setInterval(() => {
    if (mining) {
      homeBalance += 0.0002;
      homeBalanceAmount.textContent = homeBalance.toFixed(4);
      homeBalanceAmount.style.color = 'green';
      timeRemainingSeconds -= 1;
      timeRemaining.textContent = formatTimeRemaining(timeRemainingSeconds);
      timeRemaining.style.color = 'blue';
      energyDischarge.style.width = `${(timeRemainingSeconds / 86400) * 100}%`;
      energyDischarge.style.background = 'green';
      if (timeRemainingSeconds <= 0) {
        stopMining();
      }
    }
  }, 1000);
}

function stopMining() {
  mining = false;
  miningStatus.textContent = 'Mining stopped.';
  miningStatus.style.color = 'red';
  miningButton.textContent = 'Start Mining';
  miningButton.style.background = '#4CAF50';
  clearInterval(intervalId);
  timeRemainingSeconds = 86400;
  energyDischarge.style.width = '100%';
}

function formatTimeRemaining(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
}
