let yourName = prompt("Введите ваше имя!");
yourName = yourName.toUpperCase();
const numberLetter = prompt(
  "Напишите номер буквы вашего имени, которую вы хотите узнать"
);
let messageQuantity = "";
const quantityLetter = yourName.length;
if (yourName !== "" && numberLetter !== "" && numberLetter < quantityLetter) {
  const number = numberLetter - 1;
  const letter = yourName[number];
  messageQuantity = confirm(
    `В вашем имени ${yourName} количество букв - ${quantityLetter}, введенному вами номеру ${numberLetter} соответсвует буква ${letter}`
  );
} else {
  messageQuantity = confirm(
    `Вы ввели не все данные или неверные, попробуйте еще раз`
  );
}
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
      confirm("Это число, когда день рождения празднуют Даня и Василиса");
      break;
    case 9:
      confirm("Это число, когда день рождения празднует Ира");
      break;
    case 12:
      confirm("Это число, когда день рождения празднует Костя");
      break;
    case 25:
      confirm("Это число, когда день рождения празднует Юля");
      break;
    default:
      confirm("Мне ничего не известно о такой дате рождения");
  }
}
