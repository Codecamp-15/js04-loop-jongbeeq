// let a = +prompt('Enter your magic number')
// let b = +prompt('')

// if (a <= 99 && a >= 1) {

//     do {
//         if (b !== a)

//     } while (b !== a);




// }







//#####เฉลย#######
// let ansNumber = +prompt('Enter your magic number');

// // let isNull = ansNumber === null;
// // let isEmpty = ansNumber.trim() === '';
// // let isNan = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRangeNumber = (ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRage = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//     alert('Invalid Input');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try to guess number');
// }

// V2 : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด esc เพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number') || ''; // null || ''

    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99

    if (isEmpty || isNan) {
        alert('Invalid Input. Try 1-99');
    } else if (outOfRange) {
        alert('Invalid Input. Try 1-99');
    }

} while (isEmpty || isNan);

// Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range
// - Alert Correct
// - ทายได้ไม่เกิน 5 ครั้ง

let guessNumber;

//do {
for (let i = 1; i <=5; i++) {
        guessNumber = prompt("Enter your answer") || '';

        isEmpty = guessNumber.trim() === '';
        isNan = isNaN(guessNumber);
        outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99

        if (isEmpty || isNan) {
            alert('Invalid Input. Try 1-99');
        } else if (outOfRange) {
            alert('Invalid Input. Try 1-99');
        } else if (+guessNumber > +ansNumber) {
            alert('Too High');
        } else if (+guessNumber < +ansNumber) {
            alert('Too Low');
        } else if (+guessNumber === +ansNumber) {
            alert('Correct');
        }
    }
//} while (+guessNumber != +ansNumber);

// alert('Correct');

alert("Out of Limit");




