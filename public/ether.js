import { ethers } from "./ethers-5.2.esm.min.js";

let randomBytes = ethers.utils.randomBytes(16);
console.log(randomBytes)
let wordlist = ethers.utils.entropyToMnemonic(randomBytes)
console.log(wordlist)
let adress = ethers.Wallet.fromMnemonic(wordlist)
console.log(adress)
