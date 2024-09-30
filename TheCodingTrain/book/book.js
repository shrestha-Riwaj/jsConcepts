// Book Class: Represents a Book

class Book{
    constructor(title, author, isbn){
        this.title=title;
        this.author =author;
        this.isbn =isbn;
    }
}


// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        // const storedBooks =[
        //     {
        //         title:'Book One',
        //         author:"Blank",
        //         isbn:"2222",

        //     },
        //     {
        //         title:'Book Two',
        //         author:"Alice",
        //         isbn:"2322",
        //     }
        // ];
        const books = Store.getBooks();

        books.forEach(book=>{
            UI.addBookToList(book);
        })}

        static addBookToList (book){
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete" href="#">X</a></td>
            `;

            list.appendChild(row);
        }

        static deleteBook(el){
            if(el.classList.contains('delete')){
                el.parentElement.parentElement.remove();
            }
        }

        static showAlert(message, className){
            const div = document.createElement('div');
            div.className = `alert`;
            div.appendChild(document.createTextNode(message));

            const container = document.querySelector('.container');
            const form = document.querySelector('#book-form');
            container.insertBefore(div, form);

            // remove after 3 sec

            setTimeout(()=>{
                document.querySelector('.alert').remove()
            },2000)
        }

        static clearFields(){
            document.querySelector('#title').value=="";
            document.querySelector('#author').value=="";
            document.querySelector('#isbn').value=="";
        }
    }

// Store Class: Handles Storage

class Store{
   static getBooks(){

    let books;
    if(localStorage.getItem('books')===null){
        books = [];
    }
    else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
   }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));

    } 

   static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach((book, index)=>{
        if(book.isbn===isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
   }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    // prevent actual submit
    e.preventDefault(); 

// get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;



    // validate
    if(title === ""|| author ===""|| isbn ===""){
        // alert("Please fill all the fields")
        UI.showAlert('Please fill all the field',"danger");
    }
    else{
        // instantiate book
    const book = new Book(title, author, isbn);
    console.log(book);


    // Add book to UI

    UI.addBookToList(book);

    // Add book to store

    Store.addBook(book);

// show success message
UI.showAlert("Book added", "success");
    

    // Clear fields
    UI.clearFields();
    }

    
});

// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    // Remove book from UI
    UI.deleteBook(e.target);

    //  Remove book from store
    Store.removeBook
    (e.target.parentElement.previousElementSibling.textContent);

    // show success message
UI.showAlert("Book removed", "success");
})