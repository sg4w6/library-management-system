import { useState } from "react";
import { searchBooksByAuthor } from "../api/api";

const SearchBooksByAuthor = () => {
    const [authorName, setAuthorName] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            setError("");
            const result = await searchBooksByAuthor(authorName);
            setBooks(result);
        } catch (error) {
            setError("No books found for this author.");
            setBooks([]);
        }
    };

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Search Books by Author</h2>
            <input
                type="text"
                placeholder="Enter author name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 w-full">
                Search
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <ul className="mt-4">
                {books.map((book) => (
                    <li key={book.id} className="border p-2 my-2">{book.title} (ISBN: {book.isbn})</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBooksByAuthor;
