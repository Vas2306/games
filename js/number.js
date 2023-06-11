let first = prompt(
  "Давай определим, входит ли твое число в диапазон. Введите первое натуральное число - первая граница диапазона",
  ""
);
while (!isNumeric(first)) {
  alert("Это не число!");
  first = prompt(
    "Повторите попытку и еще раз введите первое натуральное число - первая граница диапазона",
    ""
  );
}
first = Number(first);
console.log(first);

let second = prompt("Введите второе натуральное число - вторая граница диапазона", "");
while (!isNumeric(second)) {
  alert("Это не число!");
  second = prompt(
    "Повторите попытку и еще раз введите второе натуральное число - вторая граница диапазона",
    ""
  );
}

second = Number(second);
console.log(second);

let number = prompt(
  "Введите натуральное число, которое вы хотите проверить на входимость",
  ""
);
while (!isNumeric(second)) {
  alert("Это не число!");
  number = prompt(
    "Повторите попытку и еще раз введите натуральное число, которое вы хотите проверить на входимость",
    ""
  );
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

number = Number(number);
console.log(number);

let min = 0;
let max = 0;
if (first < second) {
    min = first;
    max = second;
}
else {
    min = second;
    max = first;
}
console.log(min);
console.log(max);
if (number >= min && number <= max) {
    alert(`Ваше указанное натуральное число ${number} входит в диапазон [${min};${max}]`);
}
else {
    alert(`Ваше указанное натуральное число ${number} не входит в диапазон [${min};${max}]`);
    
}