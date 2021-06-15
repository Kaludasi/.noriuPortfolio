package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Builder
public class UserOrderDTO {

    private Long id;
    @NotEmpty(message = "Product is required")
    private ProductDTO product;
    @NotEmpty(message = "Customer is required")
    private PersonInfoDTO customer;
    @Nullable
    private String productDescription;
    @NotEmpty(message = "Payment type is required")
    private String paymentType;
    @NotEmpty(message = "Status is required")
    private String status;
}
