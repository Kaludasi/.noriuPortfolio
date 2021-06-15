package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    UUID id;
    @Size(min = 3, max = 50, message = "Name size should be between 3 and 50")
    String name;
    @Size(min = 3, max = 100, message = "Description size should be between 3 and 100")
    String description;
    @NotEmpty(message = "Price is required")
    BigDecimal price;
}
