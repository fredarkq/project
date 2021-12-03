"use strict";
const calc = (a, b) => a + b;



const shos = (a, b) => {
    console.log('1');
    return a + b;
};


const str = "tEst";
const arr = [1, 2, 4];

console.log(str.length);
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = 'Hello world';
console.log(logg.slice(-11, -5));

const logg = 'Hello world';
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));




function qqq(a,b) {
    let result;
    result = a % b;
    if (result == false){
       return console.log("Delitsa");
    } else {
       return console.log("Delitsa s ostatkom");
    }
}
qqq(9,3);
let besult = 1;
let brr = [2, 3, 4, 5, 6];
for (let i = 0; i < brr.length; i++) {
    besult = besult * brr[i];
}
console.log(besult);

let a = 1;
while (a <= 100) {
    console.log(a);
    a++;
}

let a = 1;
for (let i = 0; i < 100; i++){
    console.log(a);
    a++;
}