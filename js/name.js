   const yourName = prompt('Введите ваше имя!');
const quantityLetter = yourName.length;
const messageQuantity = confirm(`В вашем имени ${yourName} количество букв - ${quantityLetter}`);
const numberLetter = prompt('Напишите номер буквы вашего имени, который вы хотите узнать');
const number = numberLetter - 1;
const letter = yourName[number];
const yourLetter = confirm(`Введенному вами номеру буквы соответсвует буква ${letter}`);