import React, { useState } from "react";

import { getAll } from "./fetching"

import './style.css';

function BookItem(props) {

    return (
            <li>
                <h5>{props.id}</h5>
                <h5>{props.name}</h5>
                <h5>{props.author}</h5>
                <h5>{props.description}</h5>
                <h5>{props.year}</h5>
            </li>
    )
}

export default BookItem;