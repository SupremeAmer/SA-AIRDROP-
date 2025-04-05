// Get the mined SAC element
const minedSacElement = document.getElementById('mined-sac');
// Get the mining SAC element
const miningSacElement = document.getElementById('mining-sac');
// Get the start button element
const startButton = document.getElementById('start-button');
// Get the stop button element
const stopButton = document.getElementById('stop-button');
// Initialize mining variables
let miningBalance = 0;
let miningInterval;
let miningStartTime;
let miningExpirationTime;
// Function to start mining
function startMining() {
miningStartTime = new Date().getTime();
miningExpirationTime = miningStartTime + (7 * 60 * 60 * 1000); // 7 hours
miningInterval = setInterval(() => {
// Mine 0.0005 SAC per second
miningBalance += 0.0005;
minedSacElement.innerText = `Mined SAC: ${miningBalance.toFixed(4)}`;
miningSacElement.innerText = `Mining SAC: 0.0005 SAC/s`;
// Save the mining data to localStorage
localStorage.setItem('miningBalance', miningBalance);
localStorage.setItem('miningStartTime', miningStartTime);
}, 1000);
startButton.style.display = 'none';
stopButton.style.display = 'block';
}
// Function to stop mining
function stopMining() {
clearInterval(miningInterval);
startButton.style.display = 'block';
stopButton.style.display = 'none';
}
// Function to check if mining has expired
function checkMiningExpiration() {
const currentTime = new Date().getTime();
if (currentTime >= miningExpirationTime) {
stopMining();
alert('Mining has expired!');
}
}
// Function to resume mining
function resumeMining() {
const storedMiningBalance = localStorage.getItem('miningBalance');
const storedMiningStartTime = localStorage.getItem('miningStartTime');
if (storedMiningBalance && storedMiningStartTime) {
miningBalance = parseFloat(storedMiningBalance);
miningStartTime = parseFloat(storedMiningStartTime);
miningExpirationTime = miningStartTime + (7 * 60 * 60 * 1000); //
miningInterval = setInterval(() => {
// Mine 0.0005 SAC per second
miningBalance += 0.0005;
minedSacElement.innerText = `Mined SAC: ${miningBalance.toFixed(4)}`;
miningSacElement.innerText = `Mining SAC: 0.0005 SAC/s`;
// Save the mining data to localStorage
localStorage.setItem('miningBalance', miningBalance);
localStorage.setItem('miningStartTime', miningStartTime);
}, 1000);
startButton.style.display = 'none';
stopButton.style.display = 'block';
}
}
// Add event listeners
startButton.addEventListener('click', startMining);
stopButton.addEventListener('click', stopMining);
// Check if mining has expired every second
setInterval(checkMiningExpiration, 1000);
// Resume mining if it was previously started
resumeMining();
