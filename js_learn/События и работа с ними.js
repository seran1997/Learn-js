//Javacript позволяет нам перехватывать и обрабатывать события, происходящие с любыми DOM-элементами. Всё, что нам для этого нужно - получить ссылку на интересующий элемент через document.querySelector, а затем у этой ссылки вызывать метод addEventListener:
const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log("Кликнули по кнопке!!!");
}); 
//Информация о событии. Объект event
//Методу addEventListener передают функцию-обработчик. У неё есть параметр — объект event. Он содержит информацию и о произошедшем событии, и о «кликнутом» элементе. Параметр event можно называть как угодно, но обычно используют evt или e. Мы будем применять evt:
const button = document.querySelector('button');

button.addEventListener('click', function (event) { // event доступен как параметр
    console.log(event); // его можно использовать в теле обработчика
}); 
//Например, при клике на кнопку в свойство target попадает элемент этой кнопки:
const button = document.querySelector('.button');

button.addEventListener('click', function (evt) {
  // в переменной eventTarget окажется элемент
  // button, на который мы кликнули

    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
}); 
//У объекта event есть и другие свойства. Но эти самые важные!
//-----------------------------------------------------------------------
// Задание 1
// Дан следующий код:
// <div class="card">Iphone 15</div>
// <div class="card">Google Pixel 2</div>
// <div class="card">Xiaomi Redmi Note 10</div>
// <div class="card">Iphone 13 PRO</div> 
// Добавьте обработчик события клика на все карточки товара. Обработчик должен выводить название товара.
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
            console.log(event.target.textContent);
    });
}); 