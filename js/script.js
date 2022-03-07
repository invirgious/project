"use strict";

// //alert('Hi');
// // const result = confirm('Ты тут?');
// // console.log(result)

// // const answer = +prompt('Есть 18?','18'); // + для того, чтобы тип данных был числовой
// // prompt - можно юзать для вопросов пользователю
// // console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt('Как тебя зовут?', '');
// // answers[1] = prompt('Фамилия?' , '');
// // answers[2] = prompt('Сколько лет?', '');

// console.log(typeof(answers));

// ///////
// const user = 'Ksu';

// alert(`Привет, ${user}`); // Интерполяция
// /////

// console.log('arr' + '- object');
// console.log(4 + +'5');// +'5' значит что плюс переделывает строку в число

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr, --decr);// постфиксная форма сначала выводит старое значение
// // чтобы работало увеличение или уменьшение то нужно использовать префиксную форму

// console.log(2*4 == '8'); // сравнение по значениЮ, поэтому true
// console.log(2*4 === '8'); // строгое равенство, сравнение по типу данных, поэтому false

// const isChecked = true;
//     isClose = false;
// console.log(isChecked && isClose); // оператор && возвращает правду, если оба правдивы
// console.log(isChecked || isClose); // оператор || или  возвращает правду, если хотя бы один правдив

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let a = prompt('Один из последних просмотренных фильмов?', ''),
 b = prompt('На сколько оцените его?', ''),
 c = prompt('Один из последних просмотренных фильмов?', ''),
 d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);