const walletBalanceAmount = document.getElementById('wallet-balance-amount');
const minedBalanceAmount = document.getElementById('mined-balance-amount');

// Update wallet balance and mined balance
function updateWalletBalance() {
    const homeBalance = parseFloat(homeBalanceAmount.textContent);
    walletBalanceAmount.textContent = homeBalance.toFixed(4);
    minedBalanceAmount.textContent = `Mined Balance: ${homeBalance.toFixed(4)}`;
}

// Call the function to update the wallet balance
updateWalletBalance();

// Add event listener to update wallet balance when home balance changes
homeBalanceAmount.addEventListener('DOMSubtreeModified', updateWalletBalance);



