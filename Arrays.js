//Task1
let arr=[1,2,3,4,5]
console.log(arr);

//Task2

console.log("First element is",arr[0]);
console.log("Last element is",arr[(arr.length-1)]);

//Task3

arr.push(6);
console.log("After adding element 6",arr);

//Task4

arr.pop();
console.log("After removing last element",arr);

//Task5

arr.shift();
console.log("After removing first element",arr);

//Task6
arr.unshift(0);
console.log("After adding element 0 at the beginning",arr);

//Task7

let doublearr=arr.map((element)=>
{
    return element*2;
})

console.log("Doubled array is",doublearr);

//Task8

let filteredarr=arr.filter((element)=>
{
    return element%2==0;
})

console.log("Filtered array with even numbers is",filteredarr);

//Task9

let sum=arr.reduce((num1,currentValue)=>
{
    return num1+currentValue;
})

console.log("Sum of all elements is",sum);

//Task10

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//Task11

console.log("With For Each");
arr.forEach(element => {
    console.log(element)
});

//Task12
let  twoDimensionalArray = [
    ['A', 2, 3],
    ['D', 5, 6],
    ['G', 8, 9],
    ["J", 11, 12]
];
  
 
twoDimensionalArray.forEach(row => console.log(row));

  //Task13

 
const element1 = twoDimensionalArray[0][0]; 
const element2 = twoDimensionalArray[1][2]; 
const element3 = twoDimensionalArray[2][1]; 

console.log('First row, first column:', element1); 
console.log('Second row, third column:', element2); 
console.log('Third row, second column:', element3); 


