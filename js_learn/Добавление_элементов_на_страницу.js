const list = document.querySelector('.todo-list');

// массив дел на сегодня
const tasks = [
  'Сделать проектную работу',
  'Погулять с собакой',
  'Пройти туториал по Реакту'
];

// создадим из массива дел массив элементов
const taskElements = [];
for (let i = 0; i < tasks.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = tasks[i];
    taskElements[i] = listItem;
}

// добавим элементы в DOM с использованием цикла
for (let i = 0; i < taskElements.length; i++) {
    list.append(taskElements[i])
} 
// ---------------------------------------------------------------------------------------
// Дан массив пользователей сайта:
// const users = [{id: 1, name: "Ivan"}, {id: 2, name: "John"}, {id: 3, name: "Oleg"}] 
// А также следующая HTML-разметка:
// <div class="user-list"></div> 
// Ваша задача: добавить внутрь элемента с классом user-list блоки, отображающие информацию о каждом пользователе: Они должны выглядеть так:
// <div class="user-list">
//     <h2>User Ivan with id 1</h2>
//     <h2>User John with id 2/h2>
//     <h2>User Oleg with id 3</h2>
// </div> 
const users = [{id: 1, name: "Ivan"}, {id: 2, name: "John"}, {id: 3, name: "Oleg"}]
const divs = users.map(function(user) {
        const div = document.createElement("h2");
      div.textContent = "User " + user.name + " with id " + user.id;
});

const userList = document.querySelector('.user-list');
divs.forEach(function(div) {
    userList.append(div);
});