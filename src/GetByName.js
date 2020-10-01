import React, { useState } from "react";

import { getByName } from "./fetching"

import './style.css';

function GetByName(props) {
    // state for getById
    const [bookName, setBookName] = useState([]);


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const showBookName = await getByName(bookName);
        console.log(showBookName);
        setBookName("");
        props.setState(bookName);
    }



    return (
        <div className="content">
            <h5>Get book by name</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={bookName}
                        placeholder="enter book name"
                        onChange={e => setBookName(e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Get book by name" />
            </form>
            <br/>
        </div >
    )
}

export default GetByName;