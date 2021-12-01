const numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
let lastFilm = prompt('Last film?', ''),
    ocenka = prompt('Ocanka', ''),
    lastFilm1 = prompt('Last film?', ''),
    ocenka1 = prompt('Ocanka', '');
personalMovieDB.movies[lastFilm] = ocenka;
personalMovieDB.movies[lastFilm1] = ocenka1;
console.log(personalMovieDB.movies);