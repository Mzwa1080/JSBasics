let hrs = prompt("Enter your working hours");
let rate = prompt("Enter your rate");

// console.log(`your salary is R${hrs*rate}`)
let salary = hrs*rate;
console.log(` Your salary is R${salary.toFixed(2)}`)