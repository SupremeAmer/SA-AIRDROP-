miningButton.addEventListener('click', () => {
  if (!mining) {
    startMining();
  }
});

function startMining() {
  mining = true;
  miningStatus.textContent = 'Mining...';
  miningStatus.style.color = 'green';
  miningButton.textContent = 'Mining in progress...';
  miningButton.style.background = 'red';
  miningButton.disabled = true;
  intervalId = setInterval(() => {
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
  }, 1000);
}

function stopMining() {
  mining = false;
  miningStatus.textContent = 'Mining stopped.';
  miningStatus.style.color = 'red';
  miningButton.textContent = 'Start Mining';
  miningButton.style.background = '#4CAF50';
  miningButton.disabled = false;
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
