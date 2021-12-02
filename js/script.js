'use strict';

    let numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

/*for(let i = 0; i < numberOfFilms; i++) {
    const a = prompt('Last film?', ''),
            b = prompt('Ocenka', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}*/

for(let i = 0; i < numberOfFilms; i++){
    let a;
    
    for(let f1 = 0; f1 < 1; f1++){
        a = prompt('Last film?', '');
        if (a == false) {
            alert('Your answer is empty');
            f1--;
        } else if (a.length > 50) {
            alert('Your answer is very long');
            f1--;
        } else {
            personalMovieDB.movies[a];
        }
    }
    let b;
    for(let a1 = 0; a1 < 1; a1++){
        const b = prompt('Ocenka?', '');
        if (b == false) {
            alert('Your answer is empty');
            a1--;
        } else if (b.length > 50) {
            alert('Your answer is very long');
            a1--;
        }
        personalMovieDB.movies[a] = b;
    }
    
}
if(personalMovieDB.count <10) {
    console.log("prosmotreno malo filmov");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Vy klassicheskiy zritel');
} else if (personalMovieDB.count >= 30){
    console.log("Vy kinoman");
} else {
    console.log('Error');
}

console.log(personalMovieDB);

/*let lastFilm = prompt('Last film?', ''),
    ocenka = prompt('Ocanka', ''),
    lastFilm1 = prompt('Last film?', ''),
    ocenka1 = prompt('Ocanka', '');
personalMovieDB.movies[lastFilm] = ocenka;
personalMovieDB.movies[lastFilm1] = ocenka1;
console.log(personalMovieDB.movies);*/
