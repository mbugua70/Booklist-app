import { useContext, useState } from "react";
import { BookContext } from "../context/BookListContext";
import Styles from "../style/style.module.css";
const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <>
      <div className={Styles.bookform}>
        <form className={Styles.bookforms}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of the book"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter the author of the book"
          />
        </form>
        <button onClick={handlesubmit}>Add Book</button>
      </div>
    </>
  );
};

export default BookForm;
