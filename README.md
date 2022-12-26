# bsc-testnet-contract-deployed
Simple contract deployed on BSC Testnet.

This project are a implementation of a contract with setName function and a simple page to manipulate data into BSC Testnet.

The contract has deployed on BSC Testnet, however you can test on ganache local block after switch RPC SERVER(variavle: 'contractAddress') in 'index.html' class.

Contract address deployed in BSC Testnet: 0x66ed75220d953252ee7c76200cFbcF2e9A05536c;

Testing Project:
  - Create a metamask account with BSC Testnet 
  - Use https://testnet.bnbchain.org/faucet-smart to get some BNB to pay gas.
  - After that you hav two options:
    - 1st option:
      - Install 'Live Server' extension in Visual Studio Code.
      - Start Go Live and the local server page will open on browser.
    - 2nd option:
      - Go to https://cerulean-malasada-0dd3db.netlify.app/
        - Wait for the name that already exists in the contract to appear (It will appear below the 'ChangeName' button), after that you can change the name as you wish

> Always look at the console.log, it will show the transaction hash.
> You can follow hash transaction in: https://testnet.bscscan.com/
