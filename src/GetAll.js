import React, { useState } from "react";

import { getAll } from "./fetching"

import './style.css';

function GetAll(props) {

    const handleSubmit = async () => {
        const showAllBooks = await getAll();
        console.log(showAllBooks);
        props.setState();
    }

    return (
        <div className="content">
            <h5>Get all books</h5>
            <button type="submit" onClick={handleSubmit}>Get all books</button>
            <br />
            <br />
        </div >
    )
}

export default GetAll;