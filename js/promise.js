"use strict";

// console.log('Zdarova, zaebal');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Seichas zaeby, podozhdi');
    
//         const product = {
//             name: "Taras - pidaras",
//             price: "lasdl"
//         };
    
//       resolve(product);
//     }, 2000);
// });

// req.then((product)=> {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//  console.error('Error');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000s'));

// test(1000).then(() => console.log('2000s'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('race');
});




