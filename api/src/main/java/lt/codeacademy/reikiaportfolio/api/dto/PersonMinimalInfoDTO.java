package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Builder
public class PersonMinimalInfoDTO {

    @Size(min = 3, max = 50, message = "Name size should be between 3 and 50")
    private String name;
    @Size(min = 3, max = 50, message = "Surname size should be between 3 and 50")
    private String surname;
    @NotEmpty(message = "Email is required")
    @Email
    private String email;
    @NotEmpty(message = "Phone is required")
    private String phone;
}
