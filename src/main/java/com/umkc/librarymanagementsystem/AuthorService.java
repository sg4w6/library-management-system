package com.umkc.librarymanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Author> updateAuthor(long id, Author updatedAuthor) {
        return authorRepository.findById(id).map(existingAuthor -> {
            existingAuthor.setName(updatedAuthor.getName()); // ✅ Update only relevant fields
            return authorRepository.save(existingAuthor);
        });
    }

}
