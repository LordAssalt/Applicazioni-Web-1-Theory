"use strict"

let book={
    author : "Alex",
    title: "Storia della matematica",
    for: "Studenti",
    pages: 345,
    chapterPages: [3,5,18,67,88,98,180]
};

console.log(book);

const persona = book.author;

book.title="Advanced JS";

book.editor="Feltrinelli";

console.log(book);

let surname = book && book.author && book.author.surname;
// In questo modo se surname non è definitpo il programma non si pianta ma ci restituisce undefined
console.log(surname);

const book2 = Object.assign({}, book); //Creo un secondo ogetto
console.log(book2);

const book3 = {...book}; //Creo una copia di book usando lo spread
console.log(book3);

const {author,...rest}= book; //Mi estrae author da book
console.log(author); 