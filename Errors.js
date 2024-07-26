//Task1

function createerror()
{
    throw new Error('Something went wrong!');
}

try {
    createerror();
} catch (error) {
    console.error(error.message);
}

//Task2

function divide(a,b)
{
    if(b==0)
    {
        throw new Error('Cannot divide by zero!');
    }
    return a/b;
}

try {
    console.log(divide(10,2));
    console.log(divide(10,0));
} catch (error) {   
    console.error(error.message);
}

//Task3

try
{
    let a = 10;
    let b = '20';
    console.log(a + b);
}
catch(error)
{
    console.error(error.message);
}
finally
{
    console.log('This will always run');
}

//Task4

class CustomError extends Error{
    constructor(){
        throw new Error("This is a custom error from cutomError class");
    }
    
}

try {
    var customerror=new CustomError();
} catch (error) {
    console.log(error.message);
}

//Task 5

// Task 6
 
let errorpromise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        reject("Promise rejected!");
    },1000);
})

errorpromise.then((value)=>
{
    console.log(value);
}).catch((error)=>
    {
        console.error(error);
    })
    
//Task 7


//Task 8

fetch('https://jsonplaceholdmer.typicode.com/todos/1')
.then((response) => {
    if(!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
    
//Task 9

async function newfun(){
    try
    {
        let response = await fetch('https://jsonplaceholdemr.typicode.com/todos/1');
        if(!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.error("Error:", error);
    }
}