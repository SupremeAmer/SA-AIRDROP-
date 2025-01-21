const miningButton = document.getElementById('mining-button');
const homeBalanceAmount = document.getElementById('home-balance-amount');
const energyDischargeContainer = document.querySelector('.energy-discharge-container');
const energyDischarge = document.querySelector('.energy-discharge');
const timeRemaining = document.getElementById('time-remaining');
const miningStatus = document.getElementById('mining-status');

let homeBalance = 0;
let mining = false;
let timeRemainingSeconds = 86400; 

miningButton.addEventListener('click', () => {
  if (mining) {
    mining = false;
    miningStatus.textContent = 'Mining stopped.';
    miningButton.textContent = 'Start Mining';
  } else {
    startMining();
  }
});

function startMining() {
  mining = true;
  miningStatus.textContent = 'Mining...';
  miningButton.textContent = 'Stop Mining';
  const intervalId = setInterval(() => {
    if (mining) {
      homeBalance += 0.0002;
      homeBalanceAmount.textContent = homeBalance.toFixed(4);
      timeRemainingSeconds -= 1;
      timeRemaining.textContent = formatTimeRemaining(timeRemainingSeconds);
      energyDischarge.style.width = `${(timeRemainingSeconds / 86400) * 100}%`;
      if (timeRemainingSeconds <= 0) {
        mining = false;
        miningStatus.textContent = 'Mining stopped.';
        miningButton.textContent = 'Start Mining';
        clearInterval(intervalId);
      }
    }
  }, 1000);
}

function formatTimeRemaining(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
}
