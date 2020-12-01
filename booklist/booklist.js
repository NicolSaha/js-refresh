// BOOK CONSTRUCTOR

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() {}

// ADD BOOK TO LIST
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // CREATE TR ELEMENT
  const row = document.createElement('tr');
  // INSERT COLS
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

// SHOW ALERT
UI.prototype.showAlert = function (message, className) {
  // CREATE DIV
  const div = document.createElement('div');
  // ADD CLASSES
  div.className = `alert ${className}`;
  // ADD TEXT
  div.appendChild(document.createTextNode(message));
  // GET PARENT
  const container = document.querySelector('.container');
  // GET FORM
  const form = document.querySelector('#book-form');
  // INSERT ALERT
  container.insertBefore(div, form);
  // TIMEOUT AFTER TIME CHOSEN
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

// DELETE BOOK
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// CLEAR FIELDS
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// EVENT LISTENER FOR ADDING BOOK
document.getElementById('book-form').addEventListener('submit', function (e) {
  // GET FORM VALUES
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // INSTANTIATE BOOK
  const book = new Book(title, author, isbn);

  // INSTANTIATE UI
  const ui = new UI();

  // VALIDATE
  if (title === '' || author === '' || isbn === '') {
    // ERROR ALERT
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
    // ADD BOOK TO LIST
    ui.addBookToList(book);

    // SHOW SUCCESS
    ui.showAlert('Book Added!', 'success');

    // CLEAR FIELDS
    ui.clearFields();
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETING BOOK
document.getElementById('book-list').addEventListener('click', function (e) {
  // INSTANTIATE UI
  const ui = new UI();

  ui.deleteBook(e.target);

  // SHOW ALERT
  ui.showAlert('Book Removed', 'success');

  e.preventDefault();
});
