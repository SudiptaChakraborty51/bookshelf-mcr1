import React, { useContext } from "react";
import { BookContext } from "../../contexts/bookContext";
import "./bookCard.css";

const BookCard = ({ book }) => {
  const { id, title, author, image } = book;

  const { changeCategoryHandler } = useContext(BookContext);

  return (
    <li key={id}>
      <img src={image} alt="book-pic" />
      <p>{title}</p>
      <p>{author}</p>
      <select onChange={(e) => changeCategoryHandler(id, e.target.value)}>
        <option disabled>Move to...</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want To Read">Want To Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
    </li>
  );
};

export default BookCard;
