import { ethers } from "./ethers-5.2.esm.min.js";


// ether.js
export function generateRandomBytes(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 2)) + min;
    if(result % 4 === 0) {
        return ethers.utils.randomBytes(result);
    } else {
        return generateRandomBytes(min, max);
    }
}

export function generateMnemonic(bytes) {
    return ethers.utils.entropyToMnemonic(bytes);
}

export function generateAddress(mnemonic) {
    return ethers.Wallet.fromMnemonic(mnemonic);
}
