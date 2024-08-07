const myLibrary = [];
const addBookDialogOpen = document.getElementById("add-book");
const addBookDialog = document.getElementById("dialog");
const addBookDialogClose = document.getElementById("dialog-close");
const addBookDialogAdd = document.getElementById("dialog-submit");
const inputBookName = document.getElementById("input-book-name");
const inputPageCount = document.getElementById("input-page-count");
const inputRead = document.getElementById("input-read");
const bookList = document.getElementById("book-list");

function Book(name, pages, read){
    this.name = name;
    this.pages = pages;
    this.read = read;
}

window.onload = (event) => {
    for(let i = 0; i < myLibrary.length; i++){
        curBook = myLibrary[i];
        addBookItem(curBook.name, curBook.pages, curBook.read);
    }
};


function addBookToLibrary(name, pages, read){
    console.log("pushin");
    const newBook = new Book(name, pages, read);
    myLibrary.push(newBook);
    addBookItem(newBook.name, newBook.pages, newBook.read);
}

function checkArrayForBook(bookName){
    for(let i = 0; i < myLibrary.length; i++){
        if(bookName === myLibrary[i].name){
            return true;
        }
    }
    return false;
}

function addBookItem(name, pages, read){
    const bookItem = document.createElement("div");
    bookItem.setAttribute("id", name);
    bookItem.setAttribute("class", "book-item");
    bookList.appendChild(bookItem);
    const bookName = document.createElement("p");
    bookName.setAttribute("class", "book-item-text");
    bookName.setAttribute("id", "book-item-name");
    bookName.textContent = name;
    bookItem.appendChild(bookName);
    const bookPageCountText = document.createElement("p");
    bookPageCountText.setAttribute("class", "book-item-text");
    bookPageCountText.setAttribute("id", "book-page-amount-text");
    bookPageCountText.textContent = "Pages: ";
    bookItem.appendChild(bookPageCountText);
    const bookPageCountValue = document.createElement("p");
    bookPageCountValue.setAttribute("class", "book-item-text");
    bookPageCountValue.setAttribute("id", "book-page-amount-value");
    bookPageCountValue.textContent = pages;
    bookItem.appendChild(bookPageCountValue);
    const bookReadText = document.createElement("p");
    bookReadText.setAttribute("class", "book-item-text");
    bookReadText.setAttribute("id", "book-item-read-text");
    bookReadText.textContent = "Read: ";
    bookItem.appendChild(bookReadText);
    const bookReadValue = document.createElement("p");
    bookReadValue.setAttribute("class", "book-item-text");
    bookReadValue.setAttribute("id", "book-item-read-value");
    if(read === true){
        bookReadValue.textContent = "Yes";
    }else{
        bookReadValue.textContent = "No";
    }
    bookItem.appendChild(bookReadValue);
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "book-item-button");
    const readButton = document.createElement("button");
    readButton.setAttribute("id","book-item-read-button");
    readButton.textContent = "Read";
    buttonDiv.appendChild(readButton);
    bookItem.appendChild(buttonDiv);
}


addBookDialogOpen.addEventListener("click", () => {
    addBookDialog.showModal();
});

addBookDialogClose.addEventListener("click", (e)=> {
    e.preventDefault();
    addBookDialog.close();
});

addBookDialogAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(inputBookName.value, inputPageCount.value, inputRead.checked);
    addBookDialog.close();
})