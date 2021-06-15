package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Data;
import lt.codeacademy.reikiaportfolio.api.utils.validation.annotation.CompareFields;
import lt.codeacademy.reikiaportfolio.api.utils.validation.annotation.Password;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Password
@CompareFields(firstField = "password", secondField = "repeatPassword")
public class UserRegistrationDTO {

    @Size(min = 3, max = 50, message = "Name size should be between 3 and 50")
    public String name;
    @Size(min = 3, max = 50, message = "Surname size should be between 3 and 50")
    public String surname;
    @NotEmpty(message = "Email is required")
    @Email
    public String email;
    @NotEmpty(message = "Phone is required")
    public String phone;
    @Size(min = 8, message = "Password must at least 8 letters")
    public String password;
    @Size(min = 8, message = "Repeat password must at least 8 letters")
    public String repeatPassword;
}
