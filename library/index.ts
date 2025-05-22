class Book {
    private title: string;
    private author: string;
    private status: string;
  
    constructor(title: string, author: string, status = "Available") {
      this.title = title;
      this.author = author;
      this.status = status;
    }
  
    borrow(): void {
      if (this.status === "Available") {
        this.status = "Borrowed";
        console.log(`You have borrowed ${this.title} by ${this.author}.`);
      } else {
        console.log(`${this.title} is currently not available.`);
      }
    }
  
    returnBook(): void {
      if (this.status === "Borrowed") {
        this.status = "Available";
        console.log(`You have returned ${this.title} by ${this.author}.`);
      } else {
        console.log(`${this.title} is already available.`);
      }
    }
  
    toString(): string {
      return `${this.title} by ${this.author} - ${this.status}`;
    }
  }
  
  class Member {
    private name: string;
    private borrowedBooks: Book[];
  
    constructor(name: string) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(book: Book): void {
      book.borrow();
      this.borrowedBooks.push(book);
    }
  
    returnBook(book: Book): void {
      book.returnBook();
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
      }
    }
  
    toString(): string {
      return this.name;
    }
  }
  
  class Library {
    private books: Book[];
    private members: Member[];
  
    constructor() {
      this.books = [];
      this.members = [];
    }
  
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    addMember(member: Member): void {
      this.members.push(member);
    }
  
    listBooks(): void {
      this.books.forEach((book) => console.log(book.toString()));
    }
  
    listMembers(): void {
      this.members.forEach((member) => console.log(member.toString()));
    }
  }
  
  // Usage
  const library = new Library();
  const book1 = new Book("The Enchated Forest", "Emilia Blank");
  const book2 = new Book("Ths tails of teh nine Tailed Fox", "Inno Guyotaru");
  const member1 = new Member("Library Assistant");
  const member2 = new Member("Library Manager");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addMember(member1);
  
  library.listBooks();
  member1.borrowBook(book1);
  library.listBooks();
  member1.returnBook(book1);
  library.listBooks();
  