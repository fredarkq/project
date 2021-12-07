"use strict";

// let a = 5,
//     b = a;


// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b:1
// };

// // const copy = obj; //  При присвоюванні об*єкту, передаються не данні, а ссилка
// // copy.a = 10;
// // console.log(copy);
// // console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

console.log(newNumbers);
newNumbers.a = 10;
console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};
 
// console.log(Object.assign(numbers, add)); //assign - вставити об*єкт в об*єкт, Перше - КУДА вставити, друге - ШО вставити.
const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asasasasas';
console.log(newArray);
console.log(oldArray);

const video = ['Youtube', 'Vimeo', 'Rutube'],
      blogs = ['Wpress', 'Livjournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // spread operator

const array = ['a', 'b'];

const newAaaa = [...array];
newAaaa[0] = "f";
console.log(newAaaa);
console.log(array);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

newObj.one = 4;
console.log(q);
console.log(newObj);

