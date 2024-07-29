//Task 1
function numbers() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return function even() {
        return arr.filter(num => num % 2 === 0);
    };
}

// Call the numbers function to get the even function
let evenNumbersFunction = numbers();

// Now call the even function to get the even numbers
let evenNumbers = evenNumbersFunction();

console.log(evenNumbers); // [2, 4, 6, 8, 10]

//Task 2
function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // 2

//Task4

function greet(name) {
    return function() {
      console.log(`Hello, ${name}`);
    };
  }
  
  const greetJohn = greet('John');
  greetJohn(); // Hello, John