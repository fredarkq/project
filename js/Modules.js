// 'use strict';

// const number = 1;

// (function(){
//     let number = 2;
//     console.log(number);
//     console.log(number + 3);
// }());

// console.log(number);

// const user = (function() {
//    const privat =  function() {
//        console.log('I am privat');
//    };

//    return{
//        sayHello: privat
//    };
// }());

// user.sayHello();

function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye!');
    };
}

module.exports = myModule;