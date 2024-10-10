//Давайте попробуем найти все кнопки с CSS-классом active:

<div>
    <h1>Кнопки</h1>
    <button class="inactive">Кнопка 1</button>
    <button class="active">Кнопка 2</button>
    <button>Кнопка 3</button>
    <button class="active">Кнопка 4</button>
</div> 
const activeButtons = document.querySelectorAll("button.active");
//querySelector найдёт 1 ую удовлетворяющ. кнопку
const activeButtons = document.querySelector("button.active"); 
//document.getElementsByTagName() ищет элементы с данным тегом и возвращает их в коллекцию
let divs = document.getElementsByTagName('div'); 
/*task Дан следующий код:
<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul> 
Ваша задача - использовать методы поиска, чтобы получить  ВСЕ элементы li, которые являются ПОСЛЕДНИМИ потомками соответствующих ul элементов.*/
let elements = document.querySelectorAll('ul > li:last-child');