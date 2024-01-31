import { ethers } from "./ethers-5.2.esm.min.js";


// ether.js
export function generateRandomBytes() {
    return ethers.utils.randomBytes(24);
}

export function generateMnemonic(bytes) {
    return ethers.utils.entropyToMnemonic(bytes);
}

export function generateAddress(mnemonic) {
    return ethers.Wallet.fromMnemonic(mnemonic);
}

export async function etherScan(address) {
    const apiKey = 'GENAKV89VUS6PG7TRJ4PRHVYW43E2MY83D';
    let encodedParameters = new URLSearchParams();
    encodedParameters.append('module', 'account');
    encodedParameters.append('action', 'balance');
    encodedParameters.append('address', address.address);
    encodedParameters.append('tag', 'latest');
    encodedParameters.append('apikey', apiKey); // "apikey" au lieu de "apiKey"
    const url = 'https://api.etherscan.io/api';
    const finalurl = url + '?' + encodedParameters.toString();
console.log(finalurl);
    try {
        const response = await fetch(finalurl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

