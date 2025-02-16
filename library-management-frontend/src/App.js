import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";
import SearchBooksByAuthor from "./components/SearchBooksByAuthor";
import SearchAuthorByBook from "./components/SearchAuthorByBook";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="/search-books" element={<SearchBooksByAuthor />} />
                    <Route path="/search-authors" element={<SearchAuthorByBook />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
