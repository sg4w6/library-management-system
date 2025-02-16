import { useEffect, useState } from "react";
import { fetchBooks, deleteBook } from "../api/api";
import { useNavigate } from "react-router-dom";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadBooks();
    }, []);

    // 🔄 Fetch books from API
    const loadBooks = () => {
        fetchBooks()
            .then(setBooks)
            .catch((err) => {
                console.error("Error fetching books:", err);
                setError(err.response?.data?.message || "Failed to load books");
            });
    };

    // 🗑 Delete Book
    const handleDelete = async (bookId) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await deleteBook(bookId);
                loadBooks(); // Reload book list after deletion
            } catch (err) {
                console.error("Error deleting book:", err);
                setError("Failed to delete book.");
            }
        }
    };

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
                        <li key={book.id} className="border p-2 my-2 flex justify-between items-center">
                            <div>
                                {book.title} (ISBN: {book.isbn}) -{" "}
                                <span className={book.author?.name ? "" : "text-red-500"}>
                                    {book.author?.name || "No Author Found"}
                                </span>
                            </div>

                            <div>
                                {/* ✏️ Edit Button */}
                                <button
                                    onClick={() => navigate(`/edit-book/${book.id}`)}
                                    className="bg-yellow-500 text-white p-1 rounded ml-2"
                                >
                                    Edit
                                </button>

                                {/* 🗑 Delete Button */}
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="bg-red-500 text-white p-1 rounded ml-2"
                                >
                                    Delete
                                </button>
                            </div>
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