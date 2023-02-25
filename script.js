'use strict';

const library = [];

function Book(title, autor, pages, status) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
  library.push(book);
  return library;
}

const testKnjiga = new Book('Test', 'Pisac', 234, 'read');

addBookToLibrary(testKnjiga);

const testKnjigaDva = new Book('TestDva', 'Autor Dva', 23, 'not read');

addBookToLibrary(testKnjigaDva);

library.forEach((book) => {
  console.log(book);
});
