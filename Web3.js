import Web3 from 'web3';

const web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider('(link unavailable)'));

connectWalletButton.addEventListener('click', async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log('Connected to wallet:', account);
  } catch (error) {
    console.error('Error connecting to wallet:', error);
  }
});
