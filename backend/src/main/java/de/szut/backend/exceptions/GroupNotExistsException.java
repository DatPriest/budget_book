package de.szut.backend.exceptions;

public class GroupNotExistsException extends Exception {
    String message;
    public GroupNotExistsException(String _message) {
        message = _message;
    }
}
