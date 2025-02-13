import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksPage from "./pages/BooksPage";
import AuthorsPage from "./pages/AuthorsPage";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
