import { ethers } from "./ethers-5.2.esm.min.js";


let randomBytes = ethers.utils.randomBytes(randomNumber(16,32));
console.log(randomBytes)
let wordlist = ethers.utils.entropyToMnemonic(randomBytes)
console.log(wordlist)
let adress = ethers.Wallet.fromMnemonic(wordlist)
console.log(adress)

// Function pour avoir un nombre aléatoire entre 16 et 32, et qui soit un multiple de 4
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 2)) + min;
    if(result%4 == 0)
    {
        return result;
    }else{
        return randomNumber(min, max);
    }
    
}