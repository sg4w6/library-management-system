import { useState } from "react";
import { addAuthor } from "../api/api";

const AuthorForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addAuthor({ name });
        alert("Author added!");
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Add New Author</h2>
            <input
                type="text"
                placeholder="Author Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <button type="submit" className="bg-green-500 text-white p-2">
                Add Author
            </button>
        </form>
    );
};

export default AuthorForm;
