//Task1 

function bubblesort(arr)
{
    let len = arr.length;
    for(let i=0; i<len; i++)
    {
        for(let j=0; j<len-i-1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array in ascending order:");
console.log(bubblesort(arr));

//Task2

function selectionsort(arr)
{
    let len = arr.length;
    for(let i=0; i<len-1; i++)
    {
        let min_index = i;
        for(let j=i+1; j<len; j++)
        {
            if(arr[j] < arr[min_index])
            {
                min_index = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

let arr2=[3,4,5,3,23,456,55]
console.log("Sorted array in ascending order:");
console.log(selectionsort(arr2));

//Task 3

function quicksort(arr)
{
    if(arr.length <= 1)
    {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i=1; i<arr.length; i++)
        {
            if(arr[i] < pivot)
            {
                left.push(arr[i]);
            }
            else
            {
                right.push(arr[i]);
            }
        }
    return [...quicksort(left), pivot,...quicksort(right)];
    }

let arr3=[64, 34, 25, 12, 22, 11, 90];

console.log("Sorted array in ascending order:");

console.log(quicksort(arr3));

//Task 4

function linearsearch(arr,target)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;

}

let arr4=[1,2,3,4,5,6,7,8]

console.log("Index of element 6 in array:",linearsearch(arr4,6));

//
function binarySearch(arr,target)
{
    let left = 0;
    let right = arr.length - 1;
    while(left <= right)
        {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid] === target)
            {
                return mid;
            }
            else if(arr[mid] < target)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
    return -1;
    
}


function mergesort(arr)
{
    if(arr.length <= 1)
    {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));
    return merge(left, right);
}