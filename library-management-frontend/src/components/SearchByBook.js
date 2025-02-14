import { useState } from "react";
import { searchAuthorByBook } from "../api/api";

const SearchByBook = () => {
    const [bookTitle, setBookTitle] = useState("");
    const [author, setAuthor] = useState(null);

    const handleSearch = async () => {
        try {
            const result = await searchAuthorByBook(bookTitle);
            setAuthor(result);
        } catch (error) {
            console.error("Error searching author by book:", error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Search Author by Book</h2>
            <input
                type="text"
                placeholder="Enter book title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
                Search
            </button>
            {author && (
                <p className="mt-4 p-2 border">
                    Author: <strong>{author.name}</strong>
                </p>
            )}
        </div>
    );
};

export default SearchByBook;
