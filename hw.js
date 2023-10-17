// 1.   Write an function that contains an if/else statement for the following requirements:

function grading(studentPoint) {
    // - If student gets 80 or higher: console log  You did a good job
    if (studentPoint >= 80) {
        return "You did a good job";
    }
    // - If students get 70 or above: console log Keep trying 
    else if (studentPoint >= 70) {
        return "Keep trying";
    }
    // - If students get 60 or above: console log ehhhh
    else if (studentPoint >= 60) {
        return "ehhhh";
    } 
    // - If students get 55 or above: console log Not to good
    else if (studentPoint >= 55) {
        return "Not too good";
    }
    // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time
     else {
        return "is Bad Grade But You'll Get Em Next Time";
    }
}
//console.log(grading(90));


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

function multiplesOfTen(input) {
    for (let number = 1; number <= input; number++) {
        if (number % 10 === 0) {
            console.log(number);
        }
    }
}
//multiplesOfTen(50);


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

function totalQuarters(billAmount, itemPrice) {
     return (billAmount - itemPrice) / 0.25;
 }
//console.log(totalQuarters(1, 0.25));


//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.
//    Return in as large denominations as possible. Parameters should be amount paid and amount cost.

function totalBills(amountPaid, amountCost) {
    let billCounter = 0;

    let exchange = amountPaid - amountCost;
    while (exchange > 0) {
        if (exchange >= 100) {
            billCounter += Math.floor(exchange / 100);
            exchange -= 100 * Math.floor(exchange / 100);
        } else if (exchange >= 50) {
            billCounter += Math.floor(exchange/50);
            exchange -= 50 * Math.floor(exchange/50);
        } else if (exchange >= 20) {
            billCounter += Math.floor(exchange/20);
            exchange -= 20 * Math.floor(exchange/20);
        } else if (exchange >= 10) {
            billCounter += Math.floor(exchange/10);
            exchange -= 10 * Math.floor(exchange/10);
        } else if (exchange >= 5) {
            billCounter += Math.floor(exchange/5);
            exchange -= 5 * Math.floor(exchange/5);
        } else if (exchange >= 2) {
            billCounter += Math.floor(exchange/2);
            exchange -= 2 * Math.floor(exchange/2);
        } else {
            billCounter += exchange;
            exchange -= exchange;
        }
    }
    return billCounter;
}
//console.log(totalBills(4, 1));


// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
//print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible
//by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function printProgram() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
} else console.log(i);
    }
    return;
}
//printProgram();