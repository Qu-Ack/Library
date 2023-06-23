const add = document.querySelector(".Add-Book");
const formDiv = document.querySelector(".form");
const bookName = document.querySelector("#bookname");
const authorName = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#read");
const submitBtn = document.querySelector("#submitbtn");
const cardContainer = document.querySelector(".card-container");


let books = [];


function addABook() {
    add.addEventListener("click" , function() {
        formDiv.classList.add("active")

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
        books.push(book1);
        formDiv.classList.remove("active")
        displayBookData(book1);

    }) 

}

getUserData()

function displayBookData(book1) {
        cardContainer.innerHTML += `<div class="card"><h2>${book1.name}</h2><h2>${book1.author}</h2><h2>${book1.pages}</h2></div>`
    
}


