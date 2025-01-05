let coinBalance = 0;
let energy = 2000;
let energyRefillTime = 5 * 60 * 60 * 1000; // 5 hours
let lastEnergyRefillTime = Date.now();
let isEnergyRefilling = false;

document.getElementById('coin-icon').addEventListener('click', () => {
  if (energy > 0) {
    coinBalance += 100;
    energy -= 1;
    document.getElementById('coin-balance').textContent = coinBalance;
    document.getElementById('energy').textContent = energy;
  } else {
    alert('You have run out of energy! Please wait for 5 hours or buy energy using Aterium or Telegram Star/Turn.');
  }
});

function refillEnergy() {
  if (Date.now() - lastEnergyRefillTime >= energyRefillTime) {
    energy = 2000;
    lastEnergyRefillTime = Date.now();
    document.getElementById('energy').textContent = energy;
  }
}

setInterval(refillEnergy, 1000);

function buyEnergy() {
  // Implement Aterium or Telegram Star/Turn payment gateway here
  energy = 2000;
  document.getElementById('energy').textContent = energy;
}

document.getElementById('buy-energy').addEventListener('click', buyEnergy);
