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
  messageQuantity = alert(
    `В вашем имени ${yourName} количество букв - ${quantityLetter}, введенному вами номеру ${numberLetter} соответсвует буква ${letter}`
  );
} else {
  messageQuantity = alert(
    `Вы ввели не все данные или неверные, попробуйте еще раз`
  );
}

