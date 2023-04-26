import { useContext } from "react";
import { BookContext } from "../context/BookListContext";
import BookDetail from "../component/Bookdetail";
import Styles from "../style/style.module.css";
const BookList = () => {
  const { book } = useContext(BookContext);
  return book.length ? (
    <div className="book--list">
      <ol className={Styles.booklist}>
        {book.map((books) => {
          return <BookDetail book={books} key={books.id} />;
        })}
      </ol>
    </div>
  ) : (
    <div className={Styles["booklist-empty"]}>
      <p>Free time!! you have no book to read.</p>
    </div>
  );
};
export default BookList;
