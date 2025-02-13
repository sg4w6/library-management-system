import AuthorList from "../components/AuthorList";
import AuthorForm from "../components/AuthorForm";

const AuthorsPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Authors</h1>
            <AuthorForm />
            <AuthorList />
        </div>
    );
};

export default AuthorsPage;
