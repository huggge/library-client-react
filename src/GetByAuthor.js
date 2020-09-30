import React, { useState } from "react";

import { getByAuthor } from "./fetching"

import './style.css';

function GetByAuthor() {
    // state for getById
    const [authorName, setAuthorName] = useState([]);


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const showAuthorName = await getByAuthor(authorName);
        console.log(showAuthorName);
        setAuthorName("");
    }



    return (
        <div className="formdata flex-container">
            <h5>Get book by author</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={authorName}
                        placeholder="enter book author"
                        onChange={e => setAuthorName(e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Get books by author" />
            </form>
            <br/>
        </div >
    )
}

export default GetByAuthor;