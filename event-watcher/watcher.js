const Web3 = require('web3')
const web3 = new Web3('ws://localhost:8545')

const contractJson = require('../build/contracts/EventEmitter.json')
const contract = new web3.eth.Contract(contractJson.abi, '0xef51bbc6eb3e41db6ba4f6a6c0dd880f89fd47b2')

contract.events.Reply().on('data', (event) => console.log(event) )

setInterval(() => {
}, 1000)
