// Напишите программу, которая представляет собой простой список дел
// Программа должна предоставлять пользователю возможность добавлять новую задачу в список(название новой задачи спросите у пользователя функцией prompt) и удалять её из списка. Кроме того, должна быть возможность очистить список целиком, нажав на соответствующую кнопку.
// Мы вам немного поможем и представим изначальную разметку:
// <button id="reset">Очистить всё</button>
// <ul id="to-do-list">
//     <li class="to-do-item">Изучить JavaSctipt</li>
// </ul>
// <button id="add-button">Добавить элемент</button> 

сonst toDoList = document.getElementById("to-do-list"); 

function addItem() {
    let itemText = prompt("Введите описание задачи:");

    let listItem = document.createElement("li");
        li.classlist.add("to-do-item");
    listItem.textContent = itemText;

    listItem.addEventListener("click", function() {
      this.remove();
    });

    toDoList.appendChild(listItem);
  }

function reset() {
    const items = document.querySelectorAll(".to-do-item");
    items.forEach(function(item) {
        item.remove();
    })
}

document.getElementById("add-button").addEventListener("click", function() {
  addItem();
});

document.getElementById("reset").addEventListener("click", function() {
  reset();
});