class person 
{
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      
      greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }

      //Task 5 static greeting
      static genericGreeting(){
        return "This is generic greeting";
      }
    
}

let p1 = new person('John', 20);

p1.greeting(); 

//Task 2

person.prototype.updatesage = function() {
    this.age += 1;
  };
  
  p1.updatesage();
  console.log(`Hello, my name is ${p1.name} and I am now ${p1.age} years old.`);

  //Task 3
  
  class Student extends person {
    static countstudent=0;
    constructor(name, age, studentId) {
      // Call the parent class's constructor
      super(name, age);
      this.studentId = studentId;
      Student.countstudent++; // Increment the static property
    this.instanceNumber = Student.countstudent; // Track the instance number
    }
  
    displayDetails() {
      return this.studentId;
    }
    // Task 4
    // Overriding the greeting method 

    greeting(){
        return `Hello your name is ${this.name} and your age is ${this.age} , your studentId is ${this.studentId}`
    }
  }
  
  // Create an instance of the Student class
  const s1 = new Student('John', 20, 123);
  console.log(s1.displayDetails()); 
  console.log(s1.greeting());  // Outputs: Hello your name is John and your age is 20, your studentId is 123
  
  //Task 5 static greeting
  console.log(person.genericGreeting()); // Outputs: This is generic greeting
  
 //Task 6 
 console.log(Student.countstudent)

 //Task 8

 class person3 {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
   // Task 7 : Getters

   getFirstName(){
    return this.firstName
}
getLastName(){
    return this.lastName
}

// Task 8 : Setters

setFirstName( firstName ){
    this.firstName = firstName
    this.modifyName()
}

setLastName( lastName ) {
    this.lastName = lastName
    this.modifyName()
}
}
let per = new person3("john", "deo");
per.fullname();