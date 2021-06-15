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
    private Product product;
    @ManyToOne(cascade =  CascadeType.PERSIST)
    private Person customer;
    private String productDescription;
    private String status;
}

