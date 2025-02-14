import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Library Management</h1>
                <div>
                    <Link to="/books" className="mx-2">Books</Link>
                    <Link to="/authors" className="mx-2">Authors</Link>
                    <Link to="/search-books" className="mx-2">Search Books by Author</Link>
                    <Link to="/search-authors" className="mx-2">Search Author by Book</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
