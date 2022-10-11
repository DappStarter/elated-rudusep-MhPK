require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rice stereo modify inflict clog army gift'; 
let testAccounts = [
"0xd713064a442c2f41036819738c85bca22a51898e1035fad51e884720d806825a",
"0x09cb19f17fd6be6047a487995dcb73edc0ff0d3341035214e019f9bbb22ea2a6",
"0x4707cc9d2ff8aa207cc2b11cdac389779584b647f27aed3fc3d633e3894035d2",
"0xd748ac975d825f9862c4f398baf71ff42bc2e54024c7c075d2f39ec5907042f1",
"0x35c83fbe747aa1ceab7e0e01e921273195157767bf59c6a9d158b304bec4a337",
"0x3094c51f040c769ad7c02d95c9b9ef55dfb00639e981af19d29707259e2768f9",
"0x3e226cbc2f76d90aecd632545583353c54695a584d8afd2e01bb8443d77830ef",
"0xc1cfbc613c897b75f7354376bade7fa9b8e56a697751cd0b7bc382c0b0d6b423",
"0xc42c55538646901c312445f9cca9e183614ae1d0cc07df437c79c8405e840849",
"0x7ca35ecae078e52ed679bec6b804566e3ce19d8c5a71675d23037e3d192ec05a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

