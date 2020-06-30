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

function getMaxLessThanK(n, k){
    var s = [];
    var max = 0;
    for(var i = 0; i < n; i++){
        s[i] = i+1;
    }
    for(var i = 0; i < s.length; i++){
        for(var j = i + 1; j < s.length; j++){
            if(max < (s[i] & s[j]) && (s[i] & s[j]) < k){
                max = (s[i] & s[j]);
            }
        }
    }
    return max;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}