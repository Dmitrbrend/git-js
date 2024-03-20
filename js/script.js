"use strict";


// let number = 5;

// const lefBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//   a: 50
// };

// obj.a = 10;
// console.log(obj);

// {
//   let result = 50;
// }
// console.log(result);
// const width = 5000;
// const length = 4000;

// console.log("Ширина кузова автомобиля: " + width + ', длина: ' + length);

// ['vruru', 'ecrvere', 'hfhfhgdhd'].map(a => )

// const COLOR_RED = '#F00';

// числовая

// let number = 4;
// console.log(4/0)
// console.log('string' * 9);

// const persn = "Alex";

// const bool = true;
// const bool = false;

// console.log(something);

// let und;
// console.log(und);
// const obj = {
//   name: "jon",
//   age:25,
//   isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.pnj', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// // ......................


// const arr = [1, 2, 3];

// console.log(arr[1]);

// const pbj = {a: 1, b: 2};

// const obj = {
//   'Anna': 500,
//   'Alice': 800
// };

// const arr0d = {
//   0: 1,
//   1: 2,
//   2: 3
// }
// console.log(arr0d.0); не правильно нужно [0]

// const arrdj = {
//   a: 1,
//   b: 2,
//   c: 3
//   abs: {
//       da: [{}, {}]
//       des: {

//       }
//   }
// }

// console.log(arrdj.a); 

// arrdj.b = '1234';

// console.log(arrdj['b']);

// console.log(arrdj.b);





// alert('hello');


// const result = confirm("Are you here?");

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer); выводит то что написали

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer)); выводит что страка 

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer)); выводит что цифры

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer +5); прибовляет к числу 5

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);


// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(5%2);
// console.log(2*4 == '8');  =присваивание ==равенсво ===строгане равенсво


// const isCheked = false,
//       isClose = false;

// console.log(!isCheked || isClose);

// ....................................


// const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOffilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       x = prompt('Как звали главного актера?',''),
//       b = prompt('Какую вы дадите ему оценку', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       z = prompt('Как звали главного актера?',''),
//       d = prompt('Какую вы дадите ему оценку', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.actors[a] = x;
// personalMovieDB.movies[c] = d;
// personalMovieDB.actors[c] = z;
  
// console.log(personalMovieDB);


// .............................................

// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') :  console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('uraa');
        break;
    default:
        console.log('dddid');
        break;
}