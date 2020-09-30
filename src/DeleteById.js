import React, { useState } from "react";

import { deleteById } from "./fetching"

import './style.css';

function DeleteById(props) {
    // state for getById
    const [id, setId] = useState([]);


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const showId = await deleteById(id);
        console.log(await showId);
        setId("");
        props.setState();
    }

    return (
        <div className="formdata flex-container">
            <h5>Delete book by id</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={id}
                        placeholder="enter book id"
                        onChange={e => setId(e.target.value)}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Delete book" />
            </form>
            <br/>
        </div >
    )
}

export default DeleteById;