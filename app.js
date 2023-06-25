const addBtn = document.querySelector('.Add-Book');
const bookName = document.querySelector('#bookname');
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submitBtn = document.querySelector("#submitbtn");
const isRead = document.querySelector("#read");

const cardContainer = document.querySelector(".card-container")

const divForm = document.querySelector(".form");

let myLibrary = []



function Book(name , author , pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read;
}

function addBookToLibrary() {
    submitBtn.addEventListener("click" , function(e) {
        cardContainer.innerHTML = '';
        e.preventDefault()
        var book = new Book(bookName.value , author.value , pages.value , isRead.value);
        myLibrary.push(book);
        for(let i = 0 ; i < myLibrary.length ; i++) {
            cardContainer.innerHTML += `<div class="card"><h1>${myLibrary[i].name}</h1></card>`
        }
    })
}

addBookToLibrary();

