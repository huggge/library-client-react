import React, { useState } from "react";

import { postUserData } from "./fetching"

import './style.css';

const bookEntity = {
    name: "",
    author: "",
    description: "",
    year: ""
}

function PostBookForm() {
    // state for book object
    const [book, setBook] = useState(bookEntity);
    


    const submitToDb = async (evt) => {
        evt.preventDefault();
        const returnSt = await postUserData(book);
        console.log(returnSt);
        setBook(bookEntity)
    }

    // updating state for book object
    const updateField = e => {
        setBook({
          ...book,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div className="formdata">
            <h5>Submit new book to database</h5>
            <form onSubmit={submitToDb} autoComplete="off">
                <label>
                    <input
                        type="text"
                        value={book.name}
                        name="name"
                        placeholder="name"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={book.author}
                        name="author"
                        placeholder="author"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={book.description}
                        name="description"
                        placeholder="description"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={book.year}
                        name="year"
                        placeholder="year"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Persist book to db" />
            </form>
            <br/>
        </div >
    )
}

export default PostBookForm;