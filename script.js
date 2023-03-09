'use strict';

// Library array
const library = [];

// Book class
class Book {
  constructor(title, autor, pages, status) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.status = status;
  }
}

const form = document.querySelector('.form');

// Function to open form
function showForm() {
  form.style.display = 'block';
}

const primaryButton = document.querySelector('.btn-primary');
primaryButton.addEventListener('click', showForm);

// Function to close form
function closeForm() {
  form.style.display = 'none';
}

const formButtonClose = document.querySelector('.btn-close');
formButtonClose.addEventListener('click', closeForm);

// Create element function
function createBook(title, autor, pages, status) {
  // Book card
  const divBook = document.createElement('div');
  divBook.setAttribute('class', 'book-card');
  const bookGrid = document.querySelector('.book-grid');
  bookGrid.appendChild(divBook);
  // Book title
  const bookTitle = document.createElement('h2');
  divBook.appendChild(bookTitle);
  const bookTitleText = document.createTextNode(title);
  bookTitle.appendChild(bookTitleText);
  // Book autor
  const bookAutor = document.createElement('p');
  divBook.appendChild(bookAutor);
  const bookAutorText = document.createTextNode(autor);
  bookAutor.appendChild(bookAutorText);
  // Book page number
  const bookPageNumber = document.createElement('p');
  divBook.appendChild(bookPageNumber);
  const bookPageNumberText = document.createTextNode(pages);
  bookPageNumber.appendChild(bookPageNumberText);
  // Book status
  const bookStatus = document.createElement('button');
  bookStatus.setAttribute('class', 'btn status-btn');
  divBook.appendChild(bookStatus);
  const bookStatusText = document.createTextNode(status);
  bookStatus.appendChild(bookStatusText);
  console.log(bookStatus.innerText);
  if (bookStatus.innerText === 'Read') {
    bookStatus.style.color = '#48ff00';
  } else bookStatus.style.color = '#ff0000';
  bookStatus.addEventListener('click', function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText === 'Read') {
      e.target.innerText = 'Not read';
      e.target.style.color = '#ff0000';
    } else {
      e.target.innerText = 'Read';
      e.target.style.color = '#48ff00';
    }
  });
  // Delete button
  const deleteButton = document.createElement('ion-icon');
  deleteButton.setAttribute('name', 'trash');
  deleteButton.setAttribute('class', 'icons book-trash');
  deleteButton.setAttribute('data', library.length);
  divBook.appendChild(deleteButton);

  deleteButton.onclick = function () {
    let itemIndex = this.getAttribute('data');
    console.log(itemIndex);
    library.splice(itemIndex, 1, undefined);
    console.log(library);
  };

  return divBook;
}

// Add book function
function addBook(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const autor = document.querySelector('#autor').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value;
  const book = new Book(title, autor, pages, status);
  // closeForm();
  createBook(title, autor, pages, status);
  library.push(book);
  console.log(library);

  return library;
}

const formButtonAdd = document.querySelector('.btn-add');
formButtonAdd.addEventListener('click', addBook);

// Delete book function

const trashButton = document.querySelector('.book-trash');
const bookCard = document.querySelector('.book-card');
const bookGrid = document.querySelector('.book-grid');

document.addEventListener('click', function (e) {
  const target = e.target.closest('.book-trash');
  console.log(target);

  if (target) {
    console.log(target.parentNode);
    target.parentNode.style.display = 'none';
  }
});
