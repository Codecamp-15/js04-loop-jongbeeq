let all = 0
let even = 0
let odd = 0


for (let i = 1; i <= 100; i++) {
    all = all + i
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        even = even + i
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        odd = odd + i
    }
}

let num2 = 0

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        num2 = num2 + (i ** 2)
    }
}

let num3 = 0
let sumnum3 = 0

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        num3 = num3 + (i ** 2)
    }
}

console.log(all)
console.log(even)
console.log(odd)
console.log(num2 - num3)
