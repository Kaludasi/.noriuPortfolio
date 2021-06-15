package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Builder;
import lombok.Data;
import lt.codeacademy.reikiaportfolio.persistence.entity.Role;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Builder
public class UserLoginDTO {

    @NotEmpty
    private String email;
    @NotEmpty
    private String fullName;
    @NotEmpty
    private Role role;
}
