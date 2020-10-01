// GET all books
export async function getAll() {
  try {
    const response = await fetch(`http://localhost:8080/api/books/`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// POST a new book to database
export async function postUserData(bookObj) {
  try {

    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj)
    }

    const response = await fetch("http://localhost:8080/api/books", config);
    const json = await response.json();
    return json;
  } catch (error) {
    return console.error(error);
  }
}

// UPDATE a  book
export async function UpdateBookById(bookObj) {
  try {

    const config = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookObj)
    }

    const response = await fetch("http://localhost:8080/api/books", config);
    const json = await response.json();
    return json;
  } catch (error) {
    return console.error(error);
  }
}


// GET individual book by id
export async function getById(id) {
  try {
    const response = await fetch(`http://localhost:8080/api/books/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// DELETE a book by id
export async function deleteById(id) {
  try {

    const config = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }

    const response = await fetch(`http://localhost:8080/api/books/${id}`, config);
    const json = await response.text();
    return json;
  } catch (error) {
    return console.error(error);
  }
}

// GET individual book by name
export async function getByName(bookName) {
  try {
    const response = await fetch(`http://localhost:8080/api/books/n/${bookName}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// GET individual book by author
export async function getByAuthor(authorName) {
  try {
    const response = await fetch(`http://localhost:8080/api/books/a/${authorName}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

// GET book count
export async function GetBookCount() {
  try {
    const response = await fetch("http://localhost:8080/api/count");
    const json = await response.text();
    return json;
  } catch (error) {
    console.error(error);
  }
}