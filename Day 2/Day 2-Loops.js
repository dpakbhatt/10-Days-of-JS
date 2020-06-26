'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(var d = 0; d < s.length; d++){
        if(s[d] == 'a' || s[d] == 'e' || s[d] == 'i' || s[d] == 'o' || s[d] == 'u'){
            console.log(s[d]);
        }
    }
    for(var d = 0; d < s.length; d++){
        if(s[d] != 'a' && s[d] != 'e' && s[d] != 'i' && s[d] != 'o' && s[d] != 'u'){
            console.log(s[d]);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}