const addBtn = document.querySelector('.Add-Book');

const bookName = document.querySelector('#bookname');
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const submitBtn = document.querySelector("#submitbtn");
const isRead = document.querySelector("#read");

const cardContainer = document.querySelector(".card-container")
const formClass = document.querySelector('.form-reset')
const card = document.querySelector(".card")

const divForm = document.querySelector(".form");
const element = ''



let myLibrary = []


addBtn.addEventListener('click' , function() {
    divForm.style.opacity = 1;
    divForm.style.transform = 'scale(1)';
    divForm.classList.add('popup')
    document.addEventListener('keydown' , function(e) {
        if (e.code == "Escape") {
        divForm.classList.remove('popup')
    }
    })
     
})




function Book(name , author , pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read;
    this.display = function() {
       cardContainer.innerHTML += `<div class="card" data-index = ${myLibrary.indexOf(this)}><h3>${this.name}</h3><h3>${this.author}</h3><h3>${this.pages}</h3><button class="remove" data-index = ${myLibrary.indexOf(this)}>Remove Book</button><button class="readbtn" data-index = ${myLibrary.indexOf(this)}>${this.read}</button></card>`
    }
}



function addBookToLibrary() {
    submitBtn.addEventListener("click" , function(e) {
        e.preventDefault();
        let initialread = '';
        

        if (isRead.checked) {
            initialread = 'not read'
        }
        else {
            initialread = 'read'
        }
        var book = new Book(bookName.value , author.value , pages.value , initialread);
        myLibrary.push(book);
        book.display();
        const removebtns = document.querySelectorAll('.remove');
        const removebtnsarr = Array.from(removebtns)
        const readbtns = document.querySelectorAll('.readbtn')
        removeBook(removebtnsarr)
        readBook(readbtns)
        
        divForm.style.opacity = 0;
        divForm.style.transform = 'scale(0.001)'
        formClass.reset();
        
        
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

function readBook(btns) {
    btns.forEach(element => {
        element.addEventListener('click' , function() {
            if (element.textContent == 'read') {
                element.textContent = 'not read'
            }
            else if (element.textContent == 'not read') {
                element.textContent = 'read'
            }
        })
    })

}


