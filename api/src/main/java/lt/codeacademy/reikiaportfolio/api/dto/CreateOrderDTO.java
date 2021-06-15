package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateOrderDTO {

    @Size(min = 3, max = 50, message = "Name size should be between 3 and 50")
    private String name;
    @Size(min = 3, max = 50, message = "Surname size should be between 3 and 50")
    private String surname;
    @NotEmpty(message = "Email is required")
    @Email
    private String email;
    @NotEmpty(message = "Phone is required")
    private String phone;
    @NotEmpty(message = "Product is required")
    private UUID product;
    @Nullable
    private String productDescription;
    @NotEmpty(message = "Payment type is required")
    private String paymentType;
    private String status;
}
