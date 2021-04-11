"use strict";
class BooksRepository {
    createBook(book) {
        console.log(`do some work with ${book}`);
    }
    getBook(id) {
        console.log(`do some work with ${id}`);
    }
    getBooks() {
        console.log(`do some work without data`);
    }
    updateBook(id) {
        console.log(`do some work with ${id}`);
    }
    deleteBook(id) {
        console.log(`do some work with ${id}`);
    }
}
const booksRepository = new BooksRepository();
booksRepository.createBook({
    title: 'string',
    description: 'string',
    authors: 'string',
    favorite: false,
    fileCover: 'string',
    fileName: 'string',
    fileBook: 'string',
});
