let walletBalance = 0;
let user = {
    homeBalance: 0,
};

document.addEventListener('DOMContentLoaded', function() {
    const homeBalanceAmount = document.getElementById('home-balance-amount');
    const walletBalanceAmount = document.getElementById('wallet-balance-amount');

    // Update wallet balance
    function updateWalletBalance() {
        const homeBalance = parseFloat(homeBalanceAmount.textContent);
        walletBalance += homeBalance;
        walletBalanceAmount.textContent = walletBalance.toFixed(4);
        homeBalanceAmount.textContent = '0';
    }

    // Add event listener to wallet balance
    walletBalanceAmount.addEventListener('click', updateWalletBalance);

    // Update home balance
    function updateHomeBalance() {
        user.homeBalance += 200;
        homeBalanceAmount.textContent = user.homeBalance.toFixed(4);
    }

    // Add event listener to home balance
    homeBalanceAmount.addEventListener('click', updateHomeBalance);
});
