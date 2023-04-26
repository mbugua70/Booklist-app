import React, { createContext } from "react";
import { v4 as uuid } from "uuid";
export const BookContext = createContext();
import PropTypes from "prop-types";

export const BookContextProvider = (props) => {
  const [book, setBook] = React.useState([
    { title: "provider", author: "bethel", id: 1 },
    { title: "heavenly gates open", author: "marvick", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBook([...book, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBook(book.filter((book) => book.id !== id));
  };
  return (
    <>
      <BookContext.Provider value={{ book, addBook, removeBook }}>
        {props.children}
      </BookContext.Provider>
    </>
  );
};

BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Add this line
  // ... other prop types
};
