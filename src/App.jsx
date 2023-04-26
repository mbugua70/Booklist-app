import { BookContextProvider } from "./context/BookListContext";
import Navbar from "./component/navbar";
import Styles from "./style/style.module.css";
import BookList from "./component/Booklist";
import BookForm from "./component/Bookform";
function App() {
  return (
    <>
      <div className={Styles.app}>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </div>
    </>
  );
}

export default App;
