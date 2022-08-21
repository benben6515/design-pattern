class Book {
  title
  author
  isbn
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

const isbnNumbers = new Set<string>()

// create a unique book
const createBook = (title, author, isbn) => {
  const existingBook = isbnNumbers.has(isbn)

  if (existingBook) {
    return existingBook
  }

  const book = new Book(title, author, isbn)
  isbnNumbers.add(isbn)
  return book
}

// ---

interface BookItem {
  isbn: string,
  availability: boolean,
  sales: number,
}

const bookList: BookItem[] = []

// add a book (maybe is copied one)
const addBook = (title, author, isbn, availability, sales) => {
  const createdBook = createBook(title, author, isbn)
  if (typeof createdBook === 'object') {
    const book = {
      ...createdBook,
      isbn,
      availability,
      sales,
    }
    bookList.push(book)
    return book
  }
}

addBook('Harry Potter', 'JK Rowling', 'AB123', false, 100)
addBook('Harry Potter', 'JK Rowling', 'AB123', true, 50)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', true, 10)
addBook('To Kill a Mockingbird', 'Harper Lee', 'CD345', false, 20)
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF678', true, 30)

console.log(`The amount of copies: ${bookList.length}`)
console.log(`The amount of books: ${isbnNumbers.size}`)
