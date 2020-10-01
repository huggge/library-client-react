import React, { useState } from "react";

import { getById } from "./fetching"

import './style.css';

function GetByIdForm(props) {
    // state for getById
    const [id, setId] = useState([]);


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const showId = await getById(id);
        console.log([showId]);
        setId("");
        props.setState(id);
    }



    return (
        <div className="content">
            <h5>Get book by id</h5>
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
                <input type="submit" value="Get book" />
            </form>
            <br/>
        </div >
    )
}

export default GetByIdForm;