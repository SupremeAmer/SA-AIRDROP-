let mining = JSON.parse(localStorage.getItem('mining')) || false;
let coins = parseFloat(localStorage.getItem('coins')) || 0;
let totalSeconds = parseInt(localStorage.getItem('totalSeconds')) || 12 * 60 * 60;
let lastUpdate = Date.now();
let miningInterval;

function startMining() {
    if (!mining) {
        mining = true;
        lastUpdate = Date.now();
        miningInterval = setInterval(updateMining, 1000);
        localStorage.setItem('mining', JSON.stringify(mining));
    }
}

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

function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('time-remaining').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('coin-balance').textContent = coins.toFixed(4);
}

function saveState() {
    localStorage.setItem('coins', coins.toFixed(4));
    localStorage.setItem('totalSeconds', totalSeconds);
}

document.getElementById('start-mining').addEventListener('click', startMining);

function navigate(section) {
    window.location.href = `#${section}`;
}

window.addEventListener('load', () => {
    updateDisplay();
    if (mining) {
        startMining();
    }
});
