console.log('Problem 5');

let n = +prompt('Enter number');
console.log(n);

let sum = 0
while (n !== 0) {
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
}

console.log(sum)


