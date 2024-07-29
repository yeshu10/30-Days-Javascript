
function recursionfactorial(n)
{
    if (n == 0)
        return 1;
    else
        return (n * recursionfactorial(n - 1));

}

console.log(recursionfactorial(5));
console.log(recursionfactorial(1));
console.log(recursionfactorial(0));

//Task 2

function fibonacci(n)
{
    if (n <= 1)
        return n;
    else
        return (fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(10));
console.log(fibonacci(3));
console.log(fibonacci(2));
console.log(fibonacci(1));
console.log(fibonacci(0));

//Task 3



function recursionsum(a)
{
   if (a.length == 1)
     return a[0];
   else
    return a[0] + recursionsum(a.slice(1));
}

console.log("Sum");
console.log(recursionsum([1, 2, 3, 4, 5]));

//Task 4

function maxElement(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        const restMax = maxElement(arr.slice(1));
        return arr[0] > restMax ? arr[0] : restMax;
    }
}console.log("Max Element")

console.log(maxElement([1, 5, 3, 8, 4]));

//Task 5

function recursionreverse(str)
{
    if (str == "")
        return str;
    else
        return recursionreverse(str.substr(1)) + str.charAt(0);
}

console.log(recursionreverse("Hello World"));
console.log(recursionreverse("Good Morning"));

//Task 6

function recursionispalindrome(str)
{
    if (str.length <= 1)
        return true;
    else if (str.charAt(0) === str.charAt(str.length - 1))
        return recursionispalindrome(str.substr(1, str.length - 2));
    else
        return false;
}

console.log("Palindrome");

console.log(recursionispalindrome("racecar"));

console.log(recursionispalindrome("hello"));

//Task 7

function recursiveBinarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return recursiveBinarySearch(arr, target, mid + 1, right); // Search the right half
    } else {
        return recursiveBinarySearch(arr, target, left, mid - 1); // Search the left half
    }
}

// Test cases
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Test Cases for Recursive Binary Search:");
console.log(recursiveBinarySearch(sortedArray, 3)); // Output: 2
console.log(recursiveBinarySearch(sortedArray, 7)); // Output: 6
console.log(recursiveBinarySearch(sortedArray, 10)); // Output: 9
console.log(recursiveBinarySearch(sortedArray, 1)); // Output: 0
console.log(recursiveBinarySearch(sortedArray, 5)); // Output: 4
console.log(recursiveBinarySearch(sortedArray, 11)); // Output: -1 (not found)

// Task 8
function countoccurance(arr,element)
{
    let count = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === element)
            count++;
    }
    return count;

}
function countOccurrence(arr, element, index = 0, count = 0) {
    if (index === arr.length) {
        return count; // Base case: if we've reached the end of the array, return the count
    }

    if (arr[index] === element) {
        count++; // Increment the count if the current element matches the target element
    }

    return countOccurrence(arr, element, index + 1, count); // Recursive call with the next index
}

// Test cases
const array = [1, 5, 3, 8, 4, 5, 5, 9, 5];

console.log("Count Occurrences Recursively:");
console.log(countOccurrence(array, 5)); // Output: 4
console.log(countOccurrence(array, 3)); // Output: 1
console.log(countOccurrence(array, 10)); // Output: 0
console.log(countOccurrence(array, 1)); // Output: 1
console.log(countOccurrence(array, 8)); // Output: 1
