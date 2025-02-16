import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBooks, updateBook } from "../api/api";

const EditBook = () => {
    const { id } = useParams(); // ✅ Get book ID from URL
    const navigate = useNavigate();
    const [book, setBook] = useState(null); // 🔹 Start with null to avoid rendering issues
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBooks()
            .then((books) => {
                const bookToEdit = books.find((b) => b.id === parseInt(id)); // ✅ Ensure ID matches
                if (bookToEdit) {
                    setBook(bookToEdit);
                } else {
                    setError("Book not found.");
                }
            })
            .catch((err) => {
                console.error("Error fetching book:", err);
                setError("Failed to load book details.");
            });
    }, [id]);

    const handleUpdate = async () => {
        console.log("Updating book with ID:", id, "Data:", book); // Debugging log

        try {
            const response = await updateBook(id, book);
            console.log("Update Successful:", response); // Check API response
            navigate("/"); // Redirect to books page after success
        } catch (err) {
            console.error("Error updating book:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Failed to update book.");
        }
    };



    if (!book) return <p className="text-center text-red-500">Loading book data...</p>; // ✅ Show loading state

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Edit Book</h2>
            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                value={book.title}
                onChange={(e) => setBook({ ...book, title: e.target.value })}
                className="border p-2 my-2 w-full"
                placeholder="Book Title"
            />
            <input
                type="text"
                value={book.isbn}
                onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                className="border p-2 my-2 w-full"
                placeholder="ISBN"
            />
            <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">
                Update Book
            </button>
        </div>
    );
};

export default EditBook;
