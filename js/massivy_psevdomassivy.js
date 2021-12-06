'use strict';

 const arr = [11, 10, 33, 6, 9];
 arr.sort(compareNum);
 console.log(arr);

 function compareNum(a, b) {
     return a - b;
 }

// arr.forEach(function(item, i, arr) { // item - просто перемінна  i - номер по-порядку arr - ло якого масиву звертання
//     console.log(`${i}: ${item} vnutri massiva ${arr}`);
// });

// arr[99] = 0; // додає елемент під номером 99
// console.log(arr.length); //  показує носер останнього елемента +1 (94 пустих елемента)
// arr.pop(); // удаляє останній елемент із массива
// arr.push(10); //додає елемент в кінець массива
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) { //перебир всі елементи массиву
//     console.log(value);
// }


const str = prompt("", "");
const products = str.split(", "); // робить массив із строки (при) роздєлітєлі (", ") кому не пише.
products.sort();
console.log(products.join("; ")); // робить строку із масива, дадаючи (;) післля кожного елемента.


const stroka = "2025-12-31";
console.log(stroka.indexOf('12'));

const www = stroka.split("-");
www.sort(ppp);
function ppp(a, b) {
    return a - b;
}
const qqq = www.join("/" );
console.log(qqq);