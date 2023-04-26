import { useContext } from "react";
import { BookContext } from "../context/BookListContext";
import Styles from "../style/style.module.css";
import PropTypes from "prop-types";
const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <>
      <li
        key={book.id}
        onClick={() => removeBook(book.id)}
        className={Styles.bookdetail}
      >
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </>
  );
};

BookDetail.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetail;
