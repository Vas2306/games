for (let i = 0; i <= 5; i += 1) {
  birthday();
}
function birthday() {
  let dataName = prompt(
    "Введите дату, когда очень близкие вам люди празднуют день рождения или твоя дата"
  );
  console.log(dataName);
  dataName = Number(dataName);
  switch (dataName) {
    case 23:
      alert("Это число, когда день рождения празднуют Даня и Василиса");
      break;
    case 9:
      alert("Это число, когда день рождения празднует Ира");
      break;
    case 12:
      alert("Это число, когда день рождения празднует Костя");
      break;
    case 25:
      alert("Это число, когда день рождения празднует Юля");
      break;
    default:
      alert("Мне ничего не известно о такой дате рождения");
  }
}