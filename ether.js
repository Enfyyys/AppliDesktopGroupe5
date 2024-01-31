import { ethers } from "./ethers-5.2.esm.min.js";


// ether.js
export function generateRandomBytes() {
    const values = [16, 20, 24, 28, 32]
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];
    console.log(randomValue);
    return ethers.utils.randomBytes(randomValue);
}

export function generateMnemonic(bytes) {
    return ethers.utils.entropyToMnemonic(bytes);
}

export function generateAddress(mnemonic) {
    return ethers.Wallet.fromMnemonic(mnemonic);
}
