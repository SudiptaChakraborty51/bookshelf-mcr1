import React, { useContext } from "react";
import "./bookShelf.css";
import { BookContext } from "../../contexts/bookContext";
import BookCard from "../../components/BookCard/bookCard";

const BookShelf = () => {
  const { books } = useContext(BookContext);

  const currentlyReadingBookList = books?.filter(
    (book) => book.category.toLowerCase() === "currently reading"
  );
  const readBookList = books?.filter(
    (book) => book.category.toLowerCase() === "read"
  );
  const wantToReadBookList = books?.filter(
    (book) => book.category.toLowerCase() === "want to read"
  );
  return (
    <div className="bookshelf-main">
      <h1>Currently Reading</h1>
      <hr />
      <ul>
        {currentlyReadingBookList?.length === 0 ? (
          <h2>No books present in Currently Reading shelf.</h2>
        ) : (
          currentlyReadingBookList?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        )}
      </ul>
      <h1>Want To Read</h1>
      <hr />
      <ul>
        {wantToReadBookList?.length === 0 ? (
          <h2>No books present in Want To Read shelf.</h2>
        ) : (
          wantToReadBookList?.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        )}
      </ul>
      <h1>Read</h1>
      <hr />
      <ul>
        {readBookList?.length === 0 ? (
          <h2>No books present in Read shelf.</h2>
        ) : (
          readBookList?.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </ul>
    </div>
  );
};

export default BookShelf;
