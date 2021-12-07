'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const John = Object.create(soldier);

Object.setPrototypeOf(John, soldier); // 1- кому присвоюються дані, 2 - від кого бере дані

console.dir(John);