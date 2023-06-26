const addBtn = document.querySelector('.Add-Book');
const bookName = document.querySelector('#bookname');
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submitBtn = document.querySelector("#submitbtn");
const isRead = document.querySelector("#read");

const cardContainer = document.querySelector(".card-container")
const card = document.querySelector(".card")

const divForm = document.querySelector(".form");
const element = ''

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
        myLibrary.forEach(textBook => { 
            cardContainer.innerHTML += `<div class="card" data-index = ${myLibrary.indexOf(textBook)}><h3>${textBook.name}</h3><h3>${textBook.author}</h3><h3>${textBook.pages}</h3><button class="remove" data-index = ${myLibrary.indexOf(textBook)}>Remove Book</button></card>`
            let removebtns = document.querySelectorAll('.remove');
            const removebtnsarr = Array.from(removebtns)
            removeBook(removebtnsarr);
        }) 
        
        
    })
    
    
}

addBookToLibrary();

function removeBook(nl) {
    nl.forEach(removebtn => {
        removebtn.addEventListener('click' , function() {
            let cardIndex = removebtn.getAttribute('data-index')
            let index = nl.indexOf(removebtn)
            nl.splice(index , 1);
            myLibrary.splice(index, 1);
            let removeCard = document.querySelector(`[data-index="${cardIndex}"]`)
            cardContainer.removeChild(removeCard);
            
        })
    })

}

