package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Data;
import lt.codeacademy.reikiaportfolio.api.utils.validation.annotation.Password;

import javax.validation.constraints.Size;

@Data
@Password
public class LoginDTO {

    @Size(min = 3, max = 50, message = "Email size should be between 3 and 50")
    String email;
    @Size(min = 8, message = "Password size should be more than 8 letters long")
    String password;
}
