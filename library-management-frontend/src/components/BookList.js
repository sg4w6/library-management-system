import { useEffect, useState } from "react";
import { fetchBooks } from "../api/api";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Books List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id} className="border p-2 my-2">
                        {book.title} (ISBN: {book.isbn})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
