import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

const BooksPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Books</h1>
            <BookForm />
            <BookList />
        </div>
    );
};

export default BooksPage;
