// console.log("Дима");

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("Сумма чисел от 1 до 100: " + sum);

const nameElement = document.getElementById("name");
nameElement.textContent = "Mace";

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

const sumElement = document.getElementById("sum")
sumElement.textContent = "Сумма чисел от 1 до 100: " + sum;

alert("Я не слабак");