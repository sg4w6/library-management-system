import { useState } from "react";
import { addBook } from "../api/api";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addBook({ title, isbn });
        alert("Book added!");
        setTitle("");
        setIsbn("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Add New Book</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <input
                type="text"
                placeholder="ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-green-500 text-white p-2">
                Add Book
            </button>
        </form>
    );
};

export default BookForm;
