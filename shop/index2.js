// Запросить у юзера стоимость товара и, если она равна 100 и более, то вывести ее со скидкой в 5%, если менее - без скидки.

var cost = +prompt("Введите стоимость товара:");

cost = parseFloat(cost);

if (cost >= 100) {
    var discountedCost = cost * 0.95;
    console.log("Стоимость товара со скидкой 5%: " + discountedCost);
    
} else {
    console.log("Стоимость товара без скидки: " + cost);
}


// Запросить у юзера число и сравнить его с нулем

var number = +prompt("Введите стоимость товара:");

number = parseFloat(number);

if (number > 0) {
    console.log("Число больше нуля");
} else if (number < 0) {
    console.log("Число меньше нуля");
} else {
    console.log("Число равно нулю");
}


// Запросить у юзера число и вывести одну цифру, на которое оно заканчивается (мат.решение)

var userNumber = +prompt("Введите число:");

userNumber = parseFloat(userNumber);

var lastDigit = userNumber % 10;

console.log("Последняя цифра числа: " + lastDigit)
