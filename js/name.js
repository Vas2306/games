let yourName = prompt("Введите ваше имя!");
yourName = yourName.toUpperCase();
const numberLetter = prompt(
  "Напишите номер буквы вашего имени, который вы хотите узнать"
);
const messageQuantity = "";
const quantityLetter = yourName.length;
const yourLetter = "";
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
