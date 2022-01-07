'use strict';

// const persone = {
//     name: "alex",
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);
// console.log(persone);

class User{
    constructor(name,age) {
        this.name = name;
        this._age = age;
    }

    #surname =  'Fediv';

    get surname() {
        return this.#surname;
    }

    set surname(surn) {
        this.#surname = surn;
    }

    say() {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110 ) {
            this._age = age;
        } else {
            console.log('Hernia');
        }
    }
}

const ivan = new User('Ivan', 27);





ivan.say();

ivan.surname = 'Feeeediv';
console.log(ivan.surname);
