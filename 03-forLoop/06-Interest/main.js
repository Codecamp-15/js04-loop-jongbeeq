let money = 100000;
let rate = 2.5/100;

for (let n = 1; n <= 10; n++) {
    money = money + (money * rate);
}

console.log(money);