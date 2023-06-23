const add = document.querySelector(".Add-Book");
const formDiv = document.querySelector(".form");
const bookName = document.querySelector("#bookname");
const authorName = document.querySelector("#author");
const pages = document.querySelector("#pages")
const isRead = document.querySelector("#read");
const submitBtn = document.querySelector("#submitbtn")


let books = [];


function addABook() {
    add.addEventListener("click" , function() {
        formDiv.classList.toggle("active")

    })
}

addABook();

function Book(name , author , pages , read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function getUserData() {
    submitBtn.addEventListener('click' , function(evt){
        const book1 = new Book(bookName.value , authorName.value , pages.value , isRead.value)
        evt.preventDefault();
        books.push(book1)
        console.log(books)

    }) 

}

getUserData()
