import React, { useContext, useState } from "react";
import "./search.css";
import { BookContext } from "../../contexts/bookContext";
import { useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/bookCard";

const Search = () => {
  const { books } = useContext(BookContext);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchedBooks = books?.filter((book) =>
    book.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );
  return (
    <div>
      <h2>Search your favourite books by title</h2>
      <div>
        <i class="fa-solid fa-arrow-left" onClick={() =>navigate("/")}></i>
        <input
          placeholder="search a book"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div>
        {searchedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Search;
