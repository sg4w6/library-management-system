package com.umkc.librarymanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {

    @Autowired
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author addAuthor(Author author) {
        return authorRepository.save(author);
    }

    public Author getAuthorById(long id) {
        return authorRepository.findById(id).orElse(null);
    }

    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    public void deleteAuthor(long id) {
        authorRepository.deleteById(id);
    }

    public Author updateAuthor(long id, Author author) {
        Author authorToUpdate = getAuthorById(id);
        authorToUpdate.setName(author.getName());
        authorToUpdate.setBooks(author.getBooks());
        return authorRepository.save(authorToUpdate);
    }
}
