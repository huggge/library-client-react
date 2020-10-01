import React, { useState } from "react";

import { getAll } from "./fetching"

import BookItem from "./BookItem";

import './style.css';

function ContentContainer(props) {



    return (
        <div className="content">
            <ul>
                {props.bookList.map((bookList) => {
                    return (
                        <BookItem
                            id={bookList.id}
                            name={bookList.name}
                            author={bookList.author}
                            description={bookList.description}
                            year={bookList.year}
                        />
                    )
                })}
            </ul>
        </div >
    )
}

export default ContentContainer;