import { useEffect, useState } from "react";
import { addBook, fetchAuthors } from "../api/api";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState("");

    // Fetch authors when the component loads
    useEffect(() => {
        fetchAuthors().then(setAuthors);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        if (!title || !isbn || !authorId) {
            setError("All fields are required!");
            return;
        }

        try {
            const newBook = { title, isbn };
            await addBook(newBook, authorId);
            alert("Book added successfully!");
            setTitle("");
            setIsbn("");
            setAuthorId("");
        } catch (err) {
            setError(err.response?.data || "Failed to add book");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Book</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-2"
            />

            <input
                type="text"
                placeholder="ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className="border p-2 w-full mb-2"
            />

            <select
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                className="border p-2 w-full mb-2"
            >
                <option value="">Select Author</option>
                {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                ))}
            </select>

            <button type="submit" className="bg-green-500 text-white p-2 w-full">
                Add Book
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
};

export default BookForm;
