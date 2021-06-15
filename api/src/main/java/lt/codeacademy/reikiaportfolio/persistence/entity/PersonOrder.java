package lt.codeacademy.reikiaportfolio.persistence.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PersonOrder {

    @Id
    @GeneratedValue
    @ApiModelProperty(notes = "Order ID", name = "id")
    private Long id;

    @OneToOne
    @ApiModelProperty(notes = "Product", value = "1", name = "product")
    private Product product;
    @ManyToOne(cascade =  CascadeType.PERSIST)
    @ApiModelProperty(notes = "Person", value = "1", name = "customer")
    private Person customer;
    @ApiModelProperty(notes = "Product description", name = "productDescription")
    private String productDescription;
    @ApiModelProperty(notes = "Status", value = "luakiamaApmokejimo", name = "status")
    private String status;
}

