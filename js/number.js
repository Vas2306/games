const number1 = prompt('Введите меньшее число из диапазона');
const number2 = prompt('Введите большее число из диапазона');
const number = prompt('Введите число, чтобы узнать входит ли оно в данный диапазон');
if (number > number1 && number < number2) {
    confirm('Введенное вами число входит в диапазон')
}
else {
    confirm('Число не входит в диапазон')
}