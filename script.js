"use strict";

// 1. Выполняется, когда все теги загрузились.
document.addEventListener("DOMContentLoaded", function() {
  console.log("Все теги прогрузились");
});

// 2. Выполняется, когда все ресурсы страницы загрузились.
window.addEventListener("load", function() {
  console.log("Страница загрузилась");
});

// 3. Делегирование для обработки кликов на элементах страницы.
document.body.addEventListener("click", function(event) {
  // Проверяем, есть ли у элемента класс "super_element".
  if (event.target.classList.contains("super_element")) {
    // Определяем, есть ли класс "super_element" у родительского элемента.
    const parentHasClass = event.target.parentElement.classList.contains("super_element");
    
    // Получаем название тега в нижнем регистре.
    const tagName = event.target.tagName.toLowerCase();
    
    if (parentHasClass) {
      console.log(`Класс "super_element" присутствует в элементе "${tagName}"`);
    } else {
      console.log(`Класс "super_element" отсутствует в элементе "${tagName}"`);
    }
  }
});

// 4. При наведении на textarea.
const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", function() {
  console.log("Вы навели на textarea.");
});

// 5. Делегирование для обработки кликов на элементе ul.
const ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
});

// 7. Изменение цвета фона каждого второго тега li.
const liItems = document.querySelectorAll("li");
liItems.forEach(function(item, index) {
  if (index % 2 === 1) { // Индекс второго элемента - нечетный.
    item.style.backgroundColor = "lightgray";
  }
});
