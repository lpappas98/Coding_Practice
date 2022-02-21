'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // defining of all variables needed
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const cap_alpha = alphabet.toUpperCase();
    let shifted_alpha = "";
    let shifted_calpha="";
    let result = "";

    //for loop to set the normal and capitalized shifted alphabets from input k
    for(let i=0;i<alphabet.length;i++){
        let offset = (i + k) % alphabet.length;
        shifted_alpha += alphabet[offset];
        shifted_calpha += cap_alpha[offset]
    }

    //for loop to code the input string s using the shifted alphabets
    for (let i = 0; i < s.length; i++){
        // if the index in string is not in the normal alphabet then shift the index and add it to result
        if(alphabet.indexOf(s[i]) !== -1){
        let index = alphabet.indexOf(s[i]);
        result += shifted_alpha[index];
      }else if(cap_alpha.indexOf(s[i])!== -1){         // if the index in string is not in the capitalized alphabet then shift the index and add it to result
            console.log('ran')
            let index = cap_alpha.indexOf(s[i]);
            result += shifted_calpha[index];
        }else{ //if the index in string is not in either alphabets it is a special character and add it to the result
            result+=s[i];
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
