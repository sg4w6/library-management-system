import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Library Management</h1>
                <div>
                    <Link to="/books" className="mx-2">Books</Link>
                    <Link to="/authors" className="mx-2">Authors</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
