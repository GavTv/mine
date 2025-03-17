// document.addEventListener("DOMContentLoaded", function () {
//   // Проверяем, закрывал ли пользователь модальное окно ранее
//   if (localStorage.getItem("modalClosed") === "true") {
//     document.getElementById("modal").style.display = "none";
//   } else {
//     document.getElementById("modal").style.display = "flex"; // или "block", если не используете flex
//   }

//   document.getElementById("closeModal").addEventListener("click", function () {
//     document.getElementById("modal").style.display = "none";
//     // Сохраняем флаг в localStorage, чтобы модальное окно не показывалось при следующей загрузке страницы
//     localStorage.setItem("modalClosed", "true");
//   });
// });

// document.getElementById("enterButton").addEventListener("click", function () {
//   // Скрываем модальное окно
//   document.getElementById("modal").style.display = "none";
//   // Показываем основной контент
//   document.getElementById("mainContent").style.display = "block";
// });

document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, закрывал ли пользователь модальное окно ранее
  if (localStorage.getItem("modalClosed") === "true") {
    document.getElementById("modal").style.display = "none"; // Скрываем модальное окно
  } else {
    document.getElementById("modal").style.display = "flex"; // Показываем модальное окно
  }

  // Обработчик для кнопки "enterButton"
  const enterButton = document.getElementById("enterButton");
  if (enterButton) {
    enterButton.addEventListener("click", function () {
      document.getElementById("modal").style.display = "none"; // Скрываем модальное окно
      localStorage.setItem("modalClosed", "true"); // Сохраняем флаг в localStorage
    });
  } else {
    console.error("Элемент с id 'enterButton' не найден!");
  }
});
