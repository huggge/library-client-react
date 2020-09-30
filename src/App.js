import React, { useState } from "react";

import GetByIdForm from "./GetByIdForm";
import DeleteById from "./DeleteById";
import GetByName from "./GetByName";
import GetByAuthor from "./GetByAuthor";
import PostBookForm from "./PostBookForm";
import PutBookForm from "./PutBookForm";
import GetAll from "./GetAll";
import ContentContainer from "./ContentContainer";

import { getAll, getByName, getById } from "./fetching"

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


  return (
    <div>
      <GetAll setState={fetchAll} />
      <br />
      <br />
      <GetByIdForm setState={fetchById}/>
      <br />
      <br />
      <DeleteById setState={fetchAll} />
      <br />
      <br />
      <GetByName setState={fetchByName} />
      <br />
      <br />
      <GetByAuthor />
      <br />
      <br />
      <PostBookForm />
      <br />
      <br />
      <PutBookForm />
      <br />
      <br />
      <ContentContainer bookList={bookList} />
      <br />
      <br />
    </div>
  );
}

export default App;
