package lt.codeacademy.reikiaportfolio.api.exceptions.product;

import lombok.Getter;

@Getter
public class ProductNotFoundException extends RuntimeException {

    private final String productId;
    private final String message;

    public ProductNotFoundException(String productId) {
        this.productId = productId;
        message = String.format("Product with id '%s' doesnt exist", productId);
    }
}
