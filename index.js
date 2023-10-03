const addbookbtn = document.querySelector("#addbook");

const myLibrary = [];

function Book(title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createBook(newBook);

    document.querySelector("#popup").style.visibility = "hidden";
}

//on click of Add Book Button, the form appears
addbookbtn.addEventListener("click", function(){
    document.querySelector("#popup").style.visibility = "visible";
})

//on click of submit button from the form -> book is added to library
document.querySelector("#form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})


//this function will create all divs and text logic 
function createBook(item){
    const display = document.getElementById('main');

    const frame = document.createElement("div");
    frame.classList.add("card");
    frame.setAttribute("id", myLibrary.indexOf(item));
    display.appendChild(frame);

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("elem");
    bookTitle.textContent = `Title: ${item.title}`;
    frame.appendChild(bookTitle);


    const bookAuth = document.createElement("div");
    bookAuth.classList.add("elem");
    bookAuth.textContent = `Author: ${item.author}`;
    frame.appendChild(bookAuth);

    const bookPages = document.createElement("div");
    bookPages.classList.add("elem");
    bookPages.textContent = `Pages: ${item.pages}`;
    frame.appendChild(bookPages);

    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn")
    if (item.read === false){
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = "coral";
    } else {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "green";
    }
    frame.appendChild(readBtn);

    readBtn.addEventListener("click", function () {
        // Toggle the read status of the book
        item.read = !item.read;

        // Update the text and background color of the readBtn
        if (item.read === false) {
            readBtn.textContent = "Not Read";
            readBtn.style.backgroundColor = "coral";
        } else {
            readBtn.textContent = "Read";
            readBtn.style.backgroundColor = "green";
        }
    });


    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    frame.appendChild(removeBtn);

    //let bookId = parseInt(frame.getAttribute("id"));
    // removeBtn.addEventListener("click", function(i){
    //     myLibrary.splice(bookId, 1);
        // render();
    
    removeBtn.addEventListener("click", function () {
        // Find the index of the book object in the library
        const index = myLibrary.indexOf(item);
            if (index !== -1) {
            // Remove the book from the library
            myLibrary.splice(index, 1);
            // Remove the corresponding book card from the display
            frame.remove();
            }
        });
}