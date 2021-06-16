package lt.codeacademy.reikiaportfolio.api.utils;

import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public class EntityFactory {

    public static Person getPerson(String name, String surname, String email, String password, String phone, List<PersonOrder> orders) {
        return Person.PersonBuilder.aPerson()
                .withName(name)
                .withSurname(surname)
                .withEmail(email)
                .withPassword(password)
                .withPhone(phone)
                .withOrders(orders)
                .build();
    }

    public static Product getProduct(UUID id, String name, String description, BigDecimal price) {
        return Product.builder()
                .id(id)
                .name(name)
                .description(description)
                .price(price)
                .build();
    }

    public static PersonOrder getOrder(Product product, Person customer, String productDescription, String status) {
        return PersonOrder.builder()
                .product(product)
                .customer(customer)
                .productDescription(productDescription)
                .status(status)
                .build();
    }
}
