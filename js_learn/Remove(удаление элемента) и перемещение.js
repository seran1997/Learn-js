// Но к какому элементу применить метод remove, чтобы удалить весь элемент списка? В этой ситуации поможет метод closest. Он возвращает ближайший родительский элемент с переданным селектором. 
// Когда мы вызываем его на элементе кнопки удаления, то получаем искомый элемент списка, просто передав его класс:
// выберем кнопку удаления
const deleteButton = document.querySelector('.todo__item-button');

// добавим обработчик
deleteButton.addEventListener('click', function () {
  const listItem = deleteButton.closest('.todo__item');
  listItem.remove();
}); 


// Перемещение элементов
// Добавить в DOM можно и элемент, который там уже есть. Тогда элемент удалится с прошлого места и встанет на новое:
const list = document.querySelector('.todo-list');

// в свойстве children хранится
// псевдомассив дочерних элементов
const listItems = list.children;

// переместили первый элемент todo-листа в конец
list.append(listItems[0]); 
//Это справедливо для всех пяти методов добавления: append, prepend, before, after и replaceWith.
//-----------------------------------------------------------------------------------


// Задание 1
// Представим, что мы имеем следующую разметку в магазине смартфонов:
// <div class="card">Iphone 15</div>
// <div class="card" class="inactive">Google Pixel 2</div>
// <div class="card">Xiaomi Redmi Note 10</div>
// <div class="card" class="inactive">Iphone 13 PRO</div> 
// Когда на складе больше не остается определенного товара, он помечается CSS-классом inactive и его необходимо удалить со страницы. Напишите код, который удалит все неактивные товары.
const inactiveItems = document.querySelectorAll("div.inactive");
inactiveItems.forEach(function(item) {
    item.remove();
}) 