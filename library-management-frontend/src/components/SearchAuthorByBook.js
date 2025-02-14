import { useState } from "react";
import { searchAuthorByBook } from "../api/api";

const SearchAuthorByBook = () => {
    const [bookTitle, setBookTitle] = useState("");
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            setError("");
            const result = await searchAuthorByBook(bookTitle);
            setAuthor(result);
        } catch (error) {
            setError("Author not found for this book.");
            setAuthor(null);
        }
    };

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Search Author by Book</h2>
            <input
                type="text"
                placeholder="Enter book title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-green-500 text-white p-2 w-full">
                Search
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {author && (
                <p className="mt-4 p-2 border">Author: <strong>{author.name}</strong></p>
            )}
        </div>
    );
};

export default SearchAuthorByBook;
