import React, { createContext, useState } from "react";
import { booksData } from "../data";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);

  const changeCategoryHandler = (bookId, selectedCategory) => {
    let updatedBooks = [...books];
    if (selectedCategory.toLowerCase() === "none") {
      updatedBooks= books.filter((book) => book.id !== bookId);
    } else {
      updatedBooks =
        books.map((book) => {
          return book.id === bookId
            ? { ...book, category: selectedCategory }
            : book;
        })
    }
    setBooks(updatedBooks);
  };
  return (
    <BookContext.Provider value={{ books, changeCategoryHandler }}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
