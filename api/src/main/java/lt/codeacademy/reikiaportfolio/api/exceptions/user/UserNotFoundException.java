package lt.codeacademy.reikiaportfolio.api.exceptions.user;

import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException {

    private final String email;
    private final String message;

    public UserNotFoundException(String email) {
        this.email = email;
        message = String.format("User with email '%s' doesnt exist", email);
    }
}
