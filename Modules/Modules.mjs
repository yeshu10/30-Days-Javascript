function add(a,b)
{
    return a+b
}

const person =
{
    name: "John Doe",
    age: 30,
    greet()
    {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
export
{
    add,
    person,
    
}
