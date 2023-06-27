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
    this.readBook = function(readbtn) {
        if (read) {
            readbtn.textContent = "Not Read"
            this.read = false;
        }
        else {
            readbtn.textContent = "Read"
            this.read = true;
        }
    } 
}





function addBookToLibrary() {
    submitBtn.addEventListener("click" , function(e) {
        cardContainer.innerHTML = '';
        e.preventDefault()
        let initialReadBtnValue = '';
        if (isRead.checked) {
            initialReadBtnValue = 'not read';
        }
        else {
            initialReadBtnValue = 'read'
        }
        var book = new Book(bookName.value , author.value , pages.value , initialReadBtnValue);
        myLibrary.push(book);
        myLibrary.forEach(textBook => { 
            cardContainer.innerHTML += `<div class="card" data-index = ${myLibrary.indexOf(textBook)}><h3>${textBook.name}</h3><h3>${textBook.author}</h3><h3>${textBook.pages}</h3><button class="remove" data-index = ${myLibrary.indexOf(textBook)}>Remove Book</button><button class="readbtn">${textBook.read}</button></card>`
            let removebtns = document.querySelectorAll('.remove');
            let readbtns = document.querySelectorAll(".readbtn")
            const removebtnsarr = Array.from(removebtns)
            removeBook(removebtnsarr);
            bookRead(readbtns , book)
        }) 
        formClass.reset();
        divForm.style.opacity = 0;
        divForm.style.transform = 'scale(0.001)'
        
        
        
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

function bookRead(readbtns , item) {
    readbtns.forEach(element => {
        element.addEventListener('click' , function() {
            if (element.textContent == 'read') {
                element.textContent = 'not read';
                item.read = 'read'
                element.style.background = "red";
            }
            else if (element.textContent == 'not read') {
                element.textContent = 'read'
                item.read = 'not read'
                element.style.background = 'green';
            }
            
        })
    });
    
}

