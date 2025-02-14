import { useEffect, useState } from "react";
import { fetchAuthors, addBook } from "../api/api";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAuthors()
            .then(setAuthors)
            .catch(() => setError("Failed to load authors"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !isbn || !authorId) {
            setError("All fields are required!");
            return;
        }

        try {
            await addBook({ title, isbn }, authorId);
            alert("Book added successfully!");
            navigate("/books");
        } catch (err) {
            setError(err.response?.data?.message || JSON.stringify(err.response?.data) || "Failed to add book");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Add a New Book</h2>

            {/* ✅ Add This Line Below */}
            {error && <p className="text-red-500">{JSON.stringify(error)}</p>}

            <form onSubmit={handleSubmit} className="border p-4 mt-4">
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

                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
