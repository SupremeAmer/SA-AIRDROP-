// Initialize mining state from localStorage or set defaults
let mining = JSON.parse(localStorage.getItem('mining')) || false;
let coins = parseFloat(localStorage.getItem('coins')) || 0;
let totalSeconds = parseInt(localStorage.getItem('totalSeconds')) || 12 * 60 * 60;
let lastUpdate = parseInt(localStorage.getItem('lastUpdate')) || Date.now();
let miningInterval;

// Start the mining process
function startMining() {
    if (!mining) {
        mining = true;
        lastUpdate = Date.now();
        miningInterval = setInterval(updateMining, 1000);
        saveState();
    }
}

// Update the mining process
function updateMining() {
    if (mining) {
        const now = Date.now();
        const elapsedTime = Math.floor((now - lastUpdate) / 1000);
        lastUpdate = now;

        totalSeconds -= elapsedTime;
        coins += (elapsedTime * 0.0002);

        if (totalSeconds <= 0) {
            mining = false;
            totalSeconds = 0;
            clearInterval(miningInterval);
        }

        updateDisplay();
        saveState();
    }
}

// Update the display with the current state
function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('time-remaining').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('coin-balance').textContent = coins.toFixed(4);
}

// Save the current state to localStorage
function saveState() {
    localStorage.setItem('mining', JSON.stringify(mining));
    localStorage.setItem('coins', coins.toFixed(4));
    localStorage.setItem('totalSeconds', totalSeconds);
    localStorage.setItem('lastUpdate', lastUpdate);
}

// Event listener for the start mining button
document.getElementById('start-mining').addEventListener('click', startMining);

// Navigate to a specific section
function navigate(section) {
    window.location.href = `#${section}`;
}

// Initialize the mining process on page load
window.addEventListener('load', () => {
    if (mining) {
        const now = Date.now();
        const elapsedTime = Math.floor((now - lastUpdate) / 1000);
        totalSeconds -= elapsedTime;
        coins += (elapsedTime * 0.0002);
        lastUpdate = now;
        startMining();
    }
    updateDisplay();
});
