var DeedRepository = require('./contracts/DeedRepository')
var AuctionRepository = require('./contracts/AuctionRepository')

module.exports = {
    JSONRPC_ENDPOINT: 'http://localhost:8545',
    JSONRPC_WS_ENDPOINT: 'ws://localhost:8546', //'ws://52.59.238.144:8546',
    BZZ_ENDPOINT: 'http://localhost:8500',
    SHH_ENDPOINT: 'ws://localhost:8546',

    DEEDREPOSITORY_ADDRESS: '0xDAE6D3c856DaaeF92E6Fc6ad9ed00Ba5b72ad60d',//0xE5563CF1fe5a2976741C3cC4Ff6CB4E0B0D58F0A
    AUCTIONREPOSITORY_ADDRESS: '0x25cA04e970026279012c173A70FA6b18C084CF6d',//0xE272a73DE082C3C7DB5673c72f7dfeA33fAE9aa0

    DEEDREPOSITORY_ABI: DeedRepository.abi,
    AUCTIONREPOSITORY_ABI: AuctionRepository.abi,

    GAS_AMOUNT: 500000,

    //whisper settings
    WHISPER_SHARED_KEY: '0x8bda3abeb454847b515fa9b404cede50b1cc63cfdeddd4999d074284b4c21e15'

}

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.utils.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
