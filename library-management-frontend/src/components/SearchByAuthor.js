import { useState } from "react";
import { searchBooksByAuthor } from "../api/api";

const SearchByAuthor = () => {
    const [authorName, setAuthorName] = useState("");
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        try {
            const result = await searchBooksByAuthor(authorName);
            setBooks(result);
        } catch (error) {
            console.error("Error searching books by author:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Search Books by Author</h2>
            <input
                type="text"
                placeholder="Enter author name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
                Search
            </button>
            <ul className="mt-4">
                {books.map((book) => (
                    <li key={book.id} className="border p-2">{book.title} (ISBN: {book.isbn})</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchByAuthor;
