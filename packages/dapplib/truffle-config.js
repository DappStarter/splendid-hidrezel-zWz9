require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember artwork good nasty future sketch'; 
let testAccounts = [
"0x6acb51fa1271fe2b797ce311cdc801abe93dcbacc6de6154e70f5bf357ad5f20",
"0x038cfef03b09f79a2dc5142d25d38c12333f75b973d6b538e7057da1cb93fe23",
"0x841a5318bac50852b9d43a49c69b9b645c2b52612153ee542c48ed6534ab1f59",
"0xfd5f46b1c99808a4541ebd35dedd20c488aaa1cdbc7591c15054677f20a00856",
"0xfa16184e4ad4ed910a0944866385440b018966bcd7750345cf503d5583951d29",
"0x1f43e9bf0d7ce1a0a46c838fdca10d71c8cc5b9ee3c06d40b378854f22bd3bd4",
"0x942c3952042eead0e33241b08b75e8e5e6b34b3a9c6b39a447a5d4c9366be67b",
"0x95fc485976b560e731329b5be27e434e6c6a104c774a7f9830877634bb659b4f",
"0x8e50c6dd765fce54744717a15b4d4cde5e4be016e66a23b945db09bbb7c44006",
"0xe50c2168c0947c5fc5e9e6dfc69a32c580df99b8501e70059f56a5c51d9ecc40"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


