package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
public class UserOrderDTO {

    private Long id;
    @NotEmpty(message = "Product is required")
    private ProductDTO product;
    @NotEmpty(message = "Customer is required")
    private PersonMinimalInfoDTO customer;
    @Nullable
    private String productDescription;
    @NotEmpty(message = "Payment type is required")
    private String paymentType;
    @NotEmpty(message = "Status is required")
    private String status;
}
