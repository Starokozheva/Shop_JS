var cost = +prompt("Введите стоимость товара:");

cost = parseFloat(cost);

var discount10 = cost * 0.9;
var markup10 = cost * 1.1;
var discount25 = cost * 0.75;
var markup25 = cost * 1.25;
var discount1 = cost * 0.99;
var markup1_5 = cost * 1.015;

console.log("Стоимость товара со скидкой 10%: " + discount10);
console.log("Стоимость товара с наценкой 10%: " + markup10);
console.log("Стоимость товара со скидкой 25%: " + discount25);
console.log("Стоимость товара с наценкой 25%: " + markup25);
console.log("Стоимость товара со скидкой 1%: " + discount1);
console.log("Стоимость товара с наценкой 1.5%: " + markup1_5);