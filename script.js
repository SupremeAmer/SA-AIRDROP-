
miningButton.addEventListener('click', () => {
  if (!mining) {
    startMining();
  }
});

function startMining() {
  mining = true;
  miningStatus.textContent = 'Mining...';
  miningStatus.style.color = 'green';
  miningButton.textContent = 'Restart Mining';
  miningButton.style.background = 'red';
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
      clearInterval(intervalId);
      timeRemainingSeconds = 86400;
      energyDischarge.style.width = '100%';
    }
  }, 1000);
}

function formatTimeRemaining(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
}
