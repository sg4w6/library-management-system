import { useEffect, useState } from "react";
import { fetchAuthors } from "../api/api";

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors().then(setAuthors);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Authors List</h2>
            <ul>
                {authors.map((author) => (
                    <li key={author.id} className="border p-2 my-2">{author.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AuthorList;
