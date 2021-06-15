package lt.codeacademy.reikiaportfolio.api.exceptions.user;

import lombok.Getter;

@Getter
public class UserAlreadyExistsException extends RuntimeException {

    private final String email;
    private final String message;

    public UserAlreadyExistsException(String email) {
        this.email = email;
        message = String.format("User with email '%s' already exists", email);
    }
}
