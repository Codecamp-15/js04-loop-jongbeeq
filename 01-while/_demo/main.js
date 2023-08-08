console.log('learn while loop');

//ประเภทของ Loop
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean เช่น เจอเซเว่นแล้วเลี้ยวซ้าย ***พังง่ายสุด ถ้าเจอเงื่อนไขที่โอกาสเป็น true สูง => Infinite loop
// - Counting Loop  "----------------" จาก ตัวเลข เช่น คัดลายมือ 100 ครั้ง
// - List Loop      "----------------" จาก จำนวนของในรายการ เช่น เช็คของให้ครบสต๊อก

// Syntax
// while (Conditon) {
// }    

// let i = 1

// while (i++ <= 10) {
// // loop block
//     console.log(i)
//     // ++i;
// }

// let i = 1;
// while (i <= 20) {
// // loop block
    // if (i % 3 == 0) {
    //     console.log(1);
    // } else if (i % 5 == 0) {
    //     console.log(`${i} : High Five`);
    // }

    // if (i % 5 == 0) {
    //     console.log(`${i} : High Five`);
    // } else if (i % 3 == 0) {
    //     console.log(1);
    // }

    // if (i % 3 != 0) {
    //     console.log(i);
    // }


//     i++
// }

//FizzBuzz = ลักษณะปัญหาที่เอาไว้ฝึก logic
//Range : 1-20
//divide by 3 : Print Fizz
//divide by 5 : Print Buzz
//divide by 3 and 5 : Print FizzBuzz
//others : Print number

let i = 1
 while (i <= 20) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log(`${i} FizzBuzz`)
        } else {
            console.log(`${i} Fizz`)
        }
    } else if (i % 5 == 0) {
        if (i % 3 == 0) {
            console.log(`${i} FizzBuzz`)
        } else {
            console.log(`${i} Buzz`)
        }
    } else {
        console.log(`${i} number`)
    }

    i++
 }



console.log('end....')

