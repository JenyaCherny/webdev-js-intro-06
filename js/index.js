// Prevent us from attempting to use variables
// that are not declared
"use strict"


for (let n = 0; 
    n < 8; n++) {
    console.log(n);
}


let i = 12;
do {
    console.log(i);
    i++;
} while (i < 22);

let b = 0;
while (b < 10) {
    console.log(b);
    b++;
} 