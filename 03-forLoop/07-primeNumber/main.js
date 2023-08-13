//V.1 หาเลขที่มีตัวหาร

for (let i = 2; i <= 10000000; i++) {

    let count = 0;
    for (let j = 2; j <= 10000000; j++) {
        if (i % j == 0) {
            count = count + 1
        }
    }

    if (count > 1) {
        
    } else {
        console.log(i)
    }
}


//#################################
// for (let n = 2; n <= 100000; n++) {
//     //only 1 number
//     let isPrime =true;
//     for (let divider = 2; divider < n; divider++) {
//         // divider 2,3,4,5.......,n-1
//         if (n % divider == 0) {
//             isPrime = false;
//             break;
//         }
//         // n = 2    6/2 => 2.5 => isPrime = true
//         // n = 3    6/3 => 1.6 => isPrime = true
//         // n = 4    6/4 => 1.25 => isPrime = true
//         // n = 5
//     }
//     if (isPrime) console.log(n);

// }
