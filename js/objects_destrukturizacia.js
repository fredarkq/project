'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('test');
    }
};

options.makeTest();

const {border, bg} = options.colors; // деструктуризація 
console.log(border);

// console.log(Object.keys(options).length);
// console.log(options['colors']['border']);

// delete options.name; //удаляє елемент об*єкта
// let counter = 0;
// for (let key in options) { // циклб робить попорядку всі ключі об*єкта
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Svoistvo ${i} imeet znachenie ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Svoistvo ${key} imeet znachenie ${options[key]}`); //перебирає всі ключі і значення в об*єкті key - ключі options[key] - значення
//         counter++;
// }
// }
// console.log(counter);