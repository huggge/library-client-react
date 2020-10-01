import React, { useState } from "react";

import GetByIdForm from "./GetByIdForm";
import DeleteById from "./DeleteById";
import GetByName from "./GetByName";
import GetByAuthor from "./GetByAuthor";
import PostBookForm from "./PostBookForm";
import PutBookForm from "./PutBookForm";
import GetAll from "./GetAll";
import PostCount from "./PostCount";
import ContentContainer from "./ContentContainer";

import { getAll, getByName, getById, getByAuthor } from "./fetching"

function App() {

  const [bookList, setBookList] = useState([]);

  const [bookName, setBookName] = useState([]);

  const fetchAll = async () => {
    setBookList(await getAll());
  }

  const fetchByName = async (bookName) => {
    setBookList(await getByName(bookName));
  }

  const fetchById = async (id) => {
    setBookList([await getById(id)]);
  }

  const fetchByAuthor = async (authorName) => {
    setBookList(await getByAuthor(authorName));
  }

  return (
    <div>
      <div className="flexcontainer-outer">
        
        <div className="flexcontainer1">
          <GetAll setState={fetchAll} />
          <br />
          <br />
          <GetByIdForm setState={fetchById} />
          <br />
          <br />
          <DeleteById setState={fetchAll} />
          <br />
          <br />
          <GetByName setState={fetchByName} />
        </div>
        <br />
        <br />
        <div className="flexcontainer2">
          <GetByAuthor setState={fetchByAuthor} />
          <br />
          <br />
          <PostBookForm setState={fetchAll} />
          <br />
          <br />
          <PutBookForm setState={fetchAll} />
          <br />
          <br />
        </div>
        <div className="flexcontainer1">
          <PostCount />
          <br />
          <br />
          <ContentContainer bookList={bookList} />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
