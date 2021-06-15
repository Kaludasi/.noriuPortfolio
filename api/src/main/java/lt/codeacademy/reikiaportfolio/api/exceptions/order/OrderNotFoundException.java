package lt.codeacademy.reikiaportfolio.api.exceptions.order;

import lombok.Getter;

@Getter
public class OrderNotFoundException extends RuntimeException {

    private final String orderId;
    private final String message;

    public OrderNotFoundException(String orderId) {
        this.orderId = orderId;
        message = String.format("Order with id '%s' doesnt exist", orderId);
    }
}
