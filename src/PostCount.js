import React, { useState } from "react";

import { GetBookCount } from "./fetching"

import './style.css';

function PostCount(props) {
    // state for getById
    const [count, setCount] = useState([]);


    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const showCount = await GetBookCount();
        console.log(await showCount);
        setCount(showCount);
    }

    return (
        <div className="content">
            <br></br>
            <button onClick={handleSubmit}>Count</button>
            <h1>{count}</h1>
        </div >
    )
}

export default PostCount;