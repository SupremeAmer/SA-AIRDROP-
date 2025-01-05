let coinBalance = 0;
let energy = 2000;
let energyRefillTime = 5 * 60 * 60 * 1000; // 5 hours
let lastEnergyRefillTime = Date.now();
let isEnergyRefilling = false;
let paymentConfirmed = false;

document.getElementById('coin-icon').addEventListener('click', () => {
  if (energy > 0) {
    coinBalance += 10;
    energy -= 1;
    document.getElementById('coin-balance').textContent = `+ ${coinBalance}`;
    document.getElementById('energy').textContent = energy;
    popup("+10");
  } else {
    alert('You have run out of energy! Please buy energy using Telegram Star/Turn.');
  }
});

function popup(text) {
  const popupElement = document.createElement("div");
  popupElement.textContent = text;
  popupElement.style.position = "absolute";
  popupElement.style.top = "50%";
  popupElement.style.left = "50%";
  popupElement.style.transform = "translate(-50%, -50%)";
  popupElement.style.fontSize = "24px";
  popupElement.style.color = "#fff";
  popupElement.style.backgroundColor = "#333";
  popupElement.style.padding = "10px";
  popupElement.style.borderRadius = "10px";
  document.body.appendChild(popupElement);
  setTimeout(() => {
    popupElement.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(popupElement);
    }, 500);
  }, 1000);
}

function refillEnergy() {
  if (paymentConfirmed) {
    energy = 2000;
    lastEnergyRefillTime = Date.now();
    document.getElementById('energy').textContent = energy;
    paymentConfirmed = false;
  }
}

document.getElementById('buy-energy').addEventListener('click', () => {
  // Implement Telegram Star/Turn payment gateway here
  // For demonstration purposes, a prompt will be used
  const paymentAmount = prompt("Enter payment amount (50 Star or 0.2 Ton):");
  if (paymentAmount === "50" || paymentAmount === "0.2") {
    paymentConfirmed = true;
    refillEnergy();
  } else {
    alert("Invalid payment amount!");
  }
});
