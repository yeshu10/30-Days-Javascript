//Task1
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve("Promise successful aafter 2 seconds!");
      
    }, 2000); // Simulating an asynchronous operation with setTimeout
  });
  
  myPromise
  .then((result) => {
    console.log(result); // Output: Operation successful!
  })

  //Task 2

const RPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        reject("Rejected Promise after 2 seconds!");
    },2000);
})

RPromise
.catch((error)=>
    {
        console.log(error);
    })

//Task 3

function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data from ${url}`);
        }
        return response.json();
      })
      .then((data) => `Data from ${url}: ${JSON.stringify(data)}`)
      .catch((error) => Promise.reject(`Error fetching data from ${url}: ${error.message}`));
  }
  
  // Sequence of promises using JSONPlaceholder API
  fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then((data1) => {
      console.log(data1); // Logs: Data from the first URL
      return fetchData("https://jsonplaceholder.typicode.com/posts/2");
    })
    .then((data2) => {
      console.log(data2); // Logs: Data from the second URL
      return fetchData("https://jsonplaceholder.typicode.com/posts/3");
    })
    .then((data3) => {
      console.log(data3); // Logs: Data from the third URL
      return fetchData("https://jsonplaceholder.typicode.com/posts/4");
    })
    .then((data4) => {
      console.log(data4); // Logs: Data from the fourth URL
    })
    .catch((error) => {
      console.error(error);
    });

    //Task 4
    // Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 1000); 
    });
  }
  
  // Async function that waits for the promise to resolve and logs the value
  async function FetchedData() {
    try {
      const data = await fetchData(); 
      console.log(data); 
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the async function to log the fetched data
  FetchedData();
  
  // Task 5
  function fetcherror()
  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Fetch error occurred!");
      }, 1000); 
    });
  }

  // Async function that waits for the promise to reject and logs the error
  async function ErrorFetchData() {
    try {
      const data = await fetcherror(); 
    } catch (error) {
      console.log(error); 
    }
  }
  
  // Call the async function to log the error
  ErrorFetchData();

//Task 6

// Function to fetch data from a URL using fetch API
function fetchData3(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data from ${url}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data to the console
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }
  
  // URL of the public API endpoint
  const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
  
  // Call the function to fetch and log data
  fetchData3(apiUrl);
  
  //Task 7

  fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    console.log(response)
    return response.json();
})
.then((data) =>{
    console.log(data);
})

//Task 7 Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(await data.json());
}

getData();

//Task 8

const promises = [
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 1 resolved after 2 seconds");
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2 resolved after 1 second");
      }, 1000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3 resolved after 3 seconds");
      }, 3000);
    }),
  ];
  
  // Use `Promise.all` to wait for all promises to resolve
  Promise.all(promises)
    .then((values) => {
      // Log the resolved values of all promises
      console.log(values);
    })
    .catch((error) => {
      // Log any errors that occur
      console.error(error);
    });

    //Task 9

Promise.race(promises)
  .then((value) => {
    // Log the value of the first resolved promise
    console.log(value);
  })
  .catch((error) => {
    // Log any errors that occur
    console.error(error);
  });