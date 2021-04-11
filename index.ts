interface IBook {
  title: string,
  description: string,
  authors: string,
  favorite: boolean,
  fileCover: string,
  fileName: string,
  fileBook: string,
}

type bookId = string | number

interface IBooksRepository {
  createBook(book: IBook): void
  getBook(id: bookId): void
  getBooks(): void
  updateBook(id: bookId): void
  deleteBook(id: bookId): void
}

class BooksRepository implements IBooksRepository {
  createBook(book: IBook): void {
    console.log(`do some work with ${book}`)
  }
  getBook(id: bookId): void {
    console.log(`do some work with ${id}`)
  }
  getBooks(): void {
    console.log(`do some work without data`)
  }
  updateBook(id: bookId): void {
    console.log(`do some work with ${id}`)
  }
  deleteBook(id: bookId): void {
    console.log(`do some work with ${id}`)
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