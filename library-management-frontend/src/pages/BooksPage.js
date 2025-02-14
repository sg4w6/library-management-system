import { useEffect, useState } from "react";
import { fetchBooks } from "../api/api";
import { useNavigate } from "react-router-dom";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBooks()
            .then(setBooks)
            .catch((err) => {
                console.error("Error fetching books:", err);
                setError(err.response?.data?.message || "Failed to load books");
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Books List</h2>

            {/* ✅ "Add Book" Button */}
            <button
                onClick={() => navigate("/add-book")}
                className="bg-green-500 text-white p-2 rounded mb-4"
            >
                Add Book
            </button>

            {/* ✅ Proper Error Handling */}
            {error && <p className="text-red-500">{String(error)}</p>}

            <ul className="mt-4">
                {Array.isArray(books) ? (
                    books.map((book) => (
                        <li key={book.id} className="border p-2 my-2">
                            {book.title} (ISBN: {book.isbn}) -
                            Author: {book.author?.name ? book.author.name : <span className="text-red-500">No Author Found</span>}
                        </li>
                    ))
                ) : (
                    <p>No books available</p>
                )}
            </ul>
        </div>
    );
};

export default BooksPage;
