const add = document.querySelector(".Add-Book");
const formDiv = document.querySelector(".form");
function addABook() {
    add.addEventListener("click" , function() {
        formDiv.classList.toggle("active")

    })
}

addABook();
