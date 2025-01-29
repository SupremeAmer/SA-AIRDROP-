// wallet.js

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

document.getElementById('wallet-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = document.getElementById('wallet-address').value;
    updateWalletData(address);
});

document.getElementById('withdraw-button').addEventListener('click', withdrawBalance);

async function updateWalletData(address) {
    try {
        const balance = await web3.eth.getBalance(address);
        const minedBalance = web3.utils.fromWei(balance, 'ether');
        document.getElementById('mined-balance').textContent = minedBalance;

        const transactions = await fetchTransactions(address);
        updateTransactionHistory(transactions);
    } catch (error) {
        console.error("Error fetching wallet data:", error);
    }
}

async function fetchTransactions(address) {
    // Dummy transaction data; replace with actual transaction fetching logic
    return [
        { previousBalance: "0.0000", currentBalance: "0.0500" },
        { previousBalance: "0.0500", currentBalance: "0.1000" }
    ];
}

function updateTransactionHistory(transactions) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = ''; // Clear existing transactions
    transactions.forEach(tx => {
        const li = document.createElement('li');
        li.textContent = `Previous Balance: ${tx.previousBalance}, Current Balance: ${tx.currentBalance}`;
        transactionList.appendChild(li);
    });
}

function withdrawBalance() {
    const currentBalance = parseFloat(document.getElementById('mined-balance').textContent);
    if (currentBalance > 0) {
        // Logic to withdraw the balance
        console.log(`Withdrawing ${currentBalance} coins`);
        // Update balance and transaction history
        updateTransactionHistory([
            { previousBalance: currentBalance.toFixed(4), currentBalance: "0.0000" }
        ]);
        document.getElementById('mined-balance').textContent = "0.0000";
    } else {
        console.error("No balance to withdraw");
    }
}

function navigate(section) {
    window.location.href = `#${section}`;
}
