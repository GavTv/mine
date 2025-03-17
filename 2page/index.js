const buttons = document.querySelectorAll(".Buy"); /// завожу переменную в которую складываю все элементы у которых есть .buy

buttons.forEach((button) => {
  ///перебираю все элементы (for each) и делает какое то действие  (действие будет длится с 4 по 8) и идет до самого конца.
  button.addEventListener("click", function () {
    /// добавить(слушатель событий)  на кнопку, спобытие будет ( по клику ) что сделать когда случится событие в диапазоне с 5 по 7.
    const card = button.parentElement; /// тут я получаю доступ к родительскому элементу кнопки button (то место куда вложен button) = li родитель
    const name = card.querySelector(".fish-list-card-name").innerText; /// получаю достоп до элемента где лежит текст а затем получаю сам текст. после inner получаю сам текст
    alert(`Wrong position ${name}`);
  });
});

document.addEventListener("copy", (event) => {
  let text = document.getSelection().toString();
  event.clipboardData.setData(
    "text/plain",
    " Ну сказали же, не копировать......."
  );
  event.preventDefault();
});

// let buttons = document.querySelectorAll(".button");
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const fishcard = button.parentElement;
//     const fishname = fishcard.querySelector(".fish-list-card-name").innerText;
//     alert(`Купите пожалуйста ${fishname}`);
//   });
// });
