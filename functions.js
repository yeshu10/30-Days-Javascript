//Task 1
function evenodd(num)
{
    if(num%2==0)
    {
        console.log(num + " is even number");
    }
    else
    {
        console.log(num + " is odd number");
    }
}

evenodd(10);

//Task 2

function square(num)
{
    let x= Math.pow(num,2)
    return x;
}

console.log("square is",square(5));;

//Task 3
var max=function(num1,num2)
{
    if(num1>num2)
    {
        console.log(num1 + " is greater than",num2);
    }
    else
    {
        console.log(num2 + " is greater than",num1);
    }
}

max(10,5);

var str=function(str1,str2)
{
    return(str1+str2)
}

str("Hello","World");

//Task 5

const sum = (n1, n2) => {
    return n1 + n2;
}

console.log(sum(5, 10));

//Task 6

const checkstring=(st1,st2)=>
{
    let letters=st1.split("");
    if(st1.length>0)
    {
        for(let i=0;i<=st1.length;i++)
        {
            if(letters.includes(st2[i]))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

console.log(checkstring("Hello","l"));
console.log(checkstring("Hello","f"));
console.log(checkstring("Hello","H"));

//Task 7

function product(a,b=5)
{
    return a*b;
}

console.log(product(10));

//Task 8
 
function greet(name,age=20)
{
  let msg= console.log("Hello",name,", you are",age,"years old");

return(msg)
}

greet("John");

//Task 9

function country(c) {
    console.log(c);
  }
  
  function higherorder(countryFunction, countryName, count) {
    for (let y = 0; y < count; y++) {
      countryFunction(countryName);
    }
  }
  
  higherorder(country, "India", 3);

  function increment(d)
  {
    return (d+20);
  }
  function decrement(e)
  {
    return (e-10);
  }
  function highorder(incrementFunction,decrementFunction,value1)
  {
    let result1=incrementFunction(value1);
    let result2=decrementFunction(result1);
    console.log(result2);
  }
  
  highorder(increment,decrement, 100);