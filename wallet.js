const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
let userWalletAddress = localStorage.getItem('userWalletAddress') || generateWallet();

document.getElementById('wallet-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = document.getElementById('wallet-address').value;
    localStorage.setItem('userWalletAddress', address);
    updateWalletData(address);
});

document.getElementById('withdraw-button').addEventListener('click', withdrawBalance);

function generateWallet() {
    const account = web3.eth.accounts.create();
    localStorage.setItem('userWalletAddress', account.address);
    localStorage.setItem('userPrivateKey', account.privateKey);
    return account.address;
}

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
    return [
        { previousBalance: "0.0000", currentBalance: "0.0500" },
        { previousBalance: "0.0500", currentBalance: "0.1000" }
    ];
}

function updateTransactionHistory(transactions) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    transactions.forEach(tx => {
        const li = document.createElement('li');
        li.textContent = `Previous Balance: ${tx.previousBalance}, Current Balance: ${tx.currentBalance}`;
        transactionList.appendChild(li);
    });
}

async function withdrawBalance() {
    const currentBalance = parseFloat(document.getElementById('mined-balance').textContent);
    if (currentBalance > 0) {
        const address = localStorage.getItem('userWalletAddress');
        try {
            const transaction = await web3.eth.sendTransaction({
                from: address,
                to: 'YOUR_DESTINATION_WALLET_ADDRESS',
                value: web3.utils.toWei(currentBalance.toString(), 'ether')
            });
            console.log('Transaction successful:', transaction);
            updateTransactionHistory([{ previousBalance: currentBalance.toFixed(4), currentBalance: "0.0000" }]);
            document.getElementById('mined-balance').textContent = "0.0000";
        } catch (error) {
            console.error("Error during withdrawal:", error);
        }
    } else {
        console.error("No balance to withdraw");
    }
}

function navigate(section) {
    window.location.href = `#${section}`;
}
