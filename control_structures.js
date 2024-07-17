//Task 1
const num = prompt('Please enter number:');
if (num>0)
{
    console.log('Number is positive.');
}
else if (num<0)
{
    console.log('Number is negative.');
}
else if (num===0)
{
    console.log('Number is zero.');
}
//Task 2

const age = prompt("Please enter age")

if (age >= 18)
{
    console.log("You are eligible to vote.");
}
else if (age < 18)
{
    console.log("You are not eligible to vote yet.");
}

//Task 3

const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");
const num3 = prompt("Enter third number:");

if (num1 > num2 && num1 > num3)
{
    console.log("Number 1 is largest");
}
else if (num2 > num1 && num2 > num3)
{
    console.log("Number 2 is largest");
}
else if (num3 > num1 && num3 > num2)
{
    console.log("Number 3 is largest");
}

//Task 4

const day = prompt("Enter Day Num to find day od week")

switch(day)
{
    case 1:
        console.log("Day of the week is Monday");
        break;
    case 2:
    console.log("Day of the week is tuesday");
           break;
    case 3:
        console.log("Day of the week is Wednesday");
        break;
    case 4:
            console.log("Day of the week is Thursday");
            break;
            
    case 5:
        console.log("Day of the week is Friday");
        break;
            
    case 6:
        console.log("Day of the week is Saturday");
        break;
            
    case 7:
        console.log("Day of the week is Sunday");
        break;
            
    default:
        console.log("Invalid day number");
}

//Task 5