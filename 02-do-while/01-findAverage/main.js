let log = console.log;

//Main1
let sum = 0;
let loop = 0;
let average = 0;

let data = 0 ;

//Main2

let condition

do{
    data = prompt('Enter Number');

    condition = isNaN(data) || data < 0 || data === null || data.trim() === '';

    if(condition) data = 0;

    if(!condition) {
            sum = sum + +data;
            loop++;
            average = sum/loop;
    } else {
        break;
    };

} while(!condition & data > 0);


 log(sum);
 log(average);




