package de.szut.backend.model;

public class User {
    public String lastName;
    public String firstName;
    public String email;

    public User(
            String _lastName,
            String _firstName,
            String _email)
    {
        this.lastName = _lastName;
        this.firstName = _firstName;
        this.email = _email;
    }
}
