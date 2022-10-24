const submit = document.getElementById("submit"); 
const cardbox = document.getElementById("cardBox");
class Library {
    constructor() {
        this.books = [];
    }
} 
const myLibrary = new Library();
class Book {
    constructor(title, author, pageCount, haveRead) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.haveRead = haveRead;
    }
}
function getBook() {
    const book = new Book();
    book.title = document.getElementById('title').value
    book.author = document.getElementById('author').value
    book.pageCount = document.getElementById('pageCount').value
 
   
    function addBook() {
        let json1 = JSON.stringify(book.title)
        let json2 = JSON.stringify(myLibrary)
        if (!json2.includes(json1)) {
            myLibrary.books.push(book); 
            return makeCard(book);
            }
        else {
            alert("Error: This book is already in library, pls reload and try again");
            stop();
            }
        }
    
    
    function makeCard() {  
        const card = document.createElement("div");
        const titleCard = document.createElement("p");
        const authorCard = document.createElement("p");
        const pageCountCard = document.createElement("p");
        titleCard.textContent = "Book Title: " + book.title;
        authorCard.textContent = "Author: " + book.author;
        pageCountCard.textContent = "Page Count: " + book.pageCount;
        card.className = "card"
        
        cardbox.style.gap = "5em"
        cardbox.style.display = "flex";
        cardbox.style.justifyContent = "flex-start";
        cardbox.style.flexWrap = "wrap";
        card.appendChild(titleCard);
        card.appendChild(authorCard);
        card.appendChild(pageCountCard);
        cardbox.appendChild(card);
        return card;
        }
    addBook(book);
    return book;
}

   
submit.addEventListener("click", function() {
       getBook();
    })