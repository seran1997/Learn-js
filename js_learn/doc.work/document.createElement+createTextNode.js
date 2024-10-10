// метод createElement принимает на вход имя тега в виде строки
const listItem = document.createElement('li');
const divElement = document.createElement('div');
const imageElement = document.createElement('img');

// метод createTextNode принимает строку — текст узла
const textItem = document.createTextNode('Hello, world'); 
//-------------------------------------------------------------
// Дан массив объектов, описывающих пользователей сайта:
// const users = [{id: 1, name: "Ivan"}, {id: 2, name: "John"}, {id: 3, name: "Oleg"}] 
// Для каждого пользователя создайте элемент div и сохраните все созданные div’ы в новом массиве.
const users = [{id: 1, name: "Ivan"}, {id: 2, name: "John"}, {id: 3, name: "Oleg"}]
const divs = users.map(function(user) {
   return document.createElement("div");
}) 
console.log(divs);//проверяем правильность вывода