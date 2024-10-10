const a = [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3];

const b = a.filter(function (item, position, array) {
  return array.lastIndexOf(item) === position; // вернём уникальные элементы
});

console.log(a); // [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3]
console.log(b); // [2, 4, 7, 8, 9, 0, 1, 5, 3]
//--------------------------------------------------------------------------------------------------------
/* Диагнозы записаны в том порядке,
в каком поступили пациенты. Отсортируем его по алфавиту. */

const diagnoses = [
    'мизофобия',
    'синдром упущенной выгоды',
    'боязнь красного цвета'
  ];
  
  diagnoses.sort(function(a, b) {
    /* приведём строки к нижнему регистру,
    чтобы сравнение прошло корректно */
    a = a.toLowerCase();
    b = b.toLowerCase();
  
      if (a < b) return -1; // a расположится раньше b
      if (b < a) return 1; // b расположится раньше a
  
    return 0;
  });
  
  console.log(diagnoses);
  
  /* ["боязнь красного цвета", "мизофобия", "синдром упущенной выгоды"] */ 
  //----------------------------------------------------------------------------
  // Дан массив фильмов movies:
  //Методом filter отфильтруйте массив movies так, чтобы в нём остались только фильмы, вышедшие позже 2014 года.
  const movies = [{
    "Title": "The Lion King",
    "Year": 2019,
    "Runtime": "118 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
},
{
    "Title": "Mowgli: Legend of the Jungle",
    "Year": 2018,
    "Runtime": "104 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
},
{
    "Title": "Doctor Strange",
    "Year": 2016,
    "Runtime": "115 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
},
{
    "Title": "John Wick",
    "Year": 2014,
    "Runtime": "101 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
},
{
    "Title": "The Notebook",
    "Year": 2004,
    "Runtime": "123 min"
}
]; 
moviesFiltered = movies.filter(function (item) {
return item.Year > 2014;
}); 
//---------------------------------------------------------------
//Элементы массива chessChampions — объекты, описывающие чемпионов мира по шахматам. Отсортируйте этот массив по фамилиям гроссмейстеров в алфавитном порядке.
const chessChampions = [{name: "Magnus", surname: "Carlsen"},
    {name: "Fabiano", surname: "Caruana"}, 
   {name: "Garry", surname: "Casparov"}, 
   {name: "Liren", surname: "Ding"}]
   
   chessChampions.sort(function(a, b) {
       if (a.surname > b.surname) return 1;
       if (a.surname < b.surname) return -1;
   
   return 0;
   }); 