package lt.codeacademy.reikiaportfolio.persistence.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    @ApiModelProperty(notes = "Product UUID", value = "UUID default value", name = "id")
    private UUID id;

    @NotBlank
    @Size(min = 3, max = 50)
    @ApiModelProperty(notes = "Product name", required = true, value = "default name", name = "name")
    private String name;

    @Positive
    @NotNull
    @ApiModelProperty(notes = "Product price", required = true, name = "price", value = "")
    private BigDecimal price;

    @Size(max = 255)
    @ApiModelProperty(notes = "Product description", required = true, value = "default description", name = "description")
    private String description;
}
