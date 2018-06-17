var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let TrackerProductABI = 
[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_nameProduct",
        "type": "string"
      },
      {
        "name": "_productionDate",
        "type": "string"
      },
      {
        "name": "_manufacturer",
        "type": "string"
      },
      {
        "name": "_trackerProgress",
        "type": "string"
      }
    ],
    "name": "registerProduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProduct",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
      
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
let trackerProductAddressContract = '0x9e0226b77af53d285743fb0501f4df509d160e46';
const ProductContract = web3.eth.contract(TrackerProductABI).at(trackerProductAddressContract);
module.exports= ProductContract;
