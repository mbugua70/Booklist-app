import { useContext } from "react";
import { BookContext } from "../context/BookListContext";
import Styles from "../style/style.module.css";
const Navbar = () => {
  const { book } = useContext(BookContext);
  return (
    <>
      <header className={Styles.header}>
        <h1>Booklist you need to read</h1>
        <p>you have {book.length} books to read</p>
      </header>
    </>
  );
};

export default Navbar;
