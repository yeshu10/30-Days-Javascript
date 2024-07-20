//Task 1
let book={
    title:"Wings of Fire",
    author:"Dr.APJ Abdul Kalam",
    year:2000,
    genre:"Autobiography"
}
console.log(book)

//Task2

console.log(book.title);

//Task3

book.mytitle=Function()
    {
        let strtitle=book.title+" is written by "+book.author
        console.log(strtitle)
    }
    
    book.mytitle();

//Task 4
book.updateyear = function (year){
    book.year = year;
  }
  
  book.updateyear(2020);
  console.log(book);


//Task 5
let library={
    name:"kitabkosh",
    books:
    [
        {   
            title:"Wings of Fire",
            author:"Dr.APJ Abdul Kalam",
            year:2000,
            genre:"Autobiography"
        },
        {
            title:"The Great Gatsby",
            author:"F. Scott Fitzgerald",
            year:1925,
            genre:"Novel"
        },
        {
            title:"To Kill a Mockingbird",
            author:"Harper Lee",
            year:1960,
            genre:"Novel"
        }
    ]
}

console.log(library);

//Task 6
// library.gettitle= function () {
//     return library.books.map((book) => book.title);
// }
console.log("Library Name:",library.name)
console.log("Books in Library:",library.books.map((book) => book.title))

//Task 7

book.myyear=function(){
    let stryear=this.title+" was published in "+this.year
    console.log(stryear)
}

book.myyear();

//Task 8

let book2={
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    year:1960,
    genre:"Novel"
}
for (const key in book2) {    
        const element = book2[key];
        console.log(element)  
}

//Task 9

let book3={
    
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    year:1925,
    genre:"Novel"
}


console.log(Object.keys(book3), Object.values(book3));