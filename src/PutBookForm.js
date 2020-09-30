import React, { useState } from "react";

import { UpdateBookById } from "./fetching"

import './style.css';

const bookEntity = {
    id: "",
    name: "",
    author: "",
    description: "",
    year: ""
}

function PutBookForm() {
    // state for book object
    const [putBook, setPutBook] = useState(bookEntity);
    


    const submitToDb = async (evt) => {
        evt.preventDefault();
        const returnSt = await UpdateBookById(putBook);
        console.log(returnSt);
        setPutBook(bookEntity)
    }

    // updating state for book object
    const updateField = e => {
        setPutBook({
          ...putBook,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div className="formdata">
            <h5>Update book by id</h5>
            <form onSubmit={submitToDb} autoComplete="off">
            <label>
                    <input
                        type="text"
                        value={putBook.id}
                        name="id"
                        placeholder="id"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    <input
                        type="text"
                        value={putBook.name}
                        name="name"
                        placeholder="name"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={putBook.author}
                        name="author"
                        placeholder="author"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={putBook.description}
                        name="description"
                        placeholder="description"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type="text"
                        value={putBook.year}
                        name="year"
                        placeholder="year"
                        onChange={updateField}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Update" />
            </form>
            <br/>
        </div >
    )
}

export default PutBookForm;