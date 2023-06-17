import React, { useContext, useState } from "react";
import { BookContext } from "../../contexts/bookContext";

const BookCard = ({ book }) => {
  const { id, title, author, image } = book;

  const {changeCategoryHandler} = useContext(BookContext);

  return (
    <div key={id}>
      <img src={image} width="150px" alt="book-pic"/>
      <p>{title}</p>
      <p>{author}</p>
      <select onChange={(e) => changeCategoryHandler(id, e.target.value)}>
        <option>Move to...</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want To Read">Want To Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
    </div>
  );
};

export default BookCard;
