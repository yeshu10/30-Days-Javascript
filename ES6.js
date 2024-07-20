//Task1

const PersonName = 'John';
const age = 20;
let str = ` ${PersonName} is  ${age} years old`;
console.log(str);

//Task2

const multistr=`I m writing in first line,
                I m writing in second line,
                I m writing in third line.`;

console.log(multistr);

//Task3

//Array Destructuring
let numbers = [10,20];
let [a, b] = numbers; // Array destructuring assignment
console.log(a, b);

//Task4
//Object Destructuring

const book={
    title: '',
    author: 'Author Name',
    year: 2020
}

let {title, author} = book; 

console.log(`${title} is written by ${author}`);

//Task5
let arr = [1,2,3,4,5];
let newarr= [...arr,6, 7] ; 

console.log(newarr);

//Task6

let nums=[1,2,3,4,5,6,7,8]
let sum=(...nums)=>{
    let sum=0;
    for(const x of nums)
    {
        sum+=x
    }
    return sum
}

console.log(sum(...nums))

//Task7
let product=(x,y=10)=>
{
return x*y;
}

console.log("Product when both values are given",product(5,20));
console.log("Product when one value is  given",product(5));

//Task8
let name="one"
let showName=()=>{ console.log(`Hello ${name}, Welcome to this company`) }
let emp={
    name,
    showName
}
console.log(emp)
emp.showName()

//Task9

const propName1 = "firstName";
const propName2 = "lastName";

// Create an object with computed property names
const person = {
  [propName1]: "John",
  [propName2]: "Doe"
};

console.log(person);