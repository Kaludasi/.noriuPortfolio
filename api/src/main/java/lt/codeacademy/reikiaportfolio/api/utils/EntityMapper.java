package lt.codeacademy.reikiaportfolio.api.utils;

import lt.codeacademy.reikiaportfolio.api.dto.*;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;

import java.util.List;
import java.util.stream.Collectors;

public interface EntityMapper {

    static Person map(UserRegistrationDTO userRegistration) {
        return EntityFactory.getPerson(
                userRegistration.getName(),
                userRegistration.getSurname(),
                userRegistration.getEmail(),
                userRegistration.getPassword(),
                userRegistration.getPhone(),
                List.of());
    }

    static Product map(ProductDTO productDTO) {
        return EntityFactory.getProduct(
                productDTO.getId(),
                productDTO.getName(),
                productDTO.getDescription(),
                productDTO.getPrice());
    }

    static PersonOrder map(CreateOrderDTO createOrderDTO, Person person, Product product) {
        return EntityFactory.getOrder(
                product,
                person,
                createOrderDTO.getProductDescription(),
                createOrderDTO.getStatus());
    }

    static UserOrderDTO map(PersonOrder personOrder) {
        return UserOrderDTO.builder()
                .id(personOrder.getId())
                .customer(mapToMinimalInfo(personOrder.getCustomer()))
                .product(map(personOrder.getProduct()))
                .productDescription(personOrder.getProductDescription())
                .status(personOrder.getStatus())
                .build();
    }

    static PersonMinimalInfoDTO mapToMinimalInfo(Person customer) {
        return PersonMinimalInfoDTO.builder()
                .name(customer.getName())
                .email(customer.getEmail())
                .surname(customer.getSurname())
                .phone(customer.getPhone())
                .build();
    }

    static ProductDTO map(Product product) {
        return ProductDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .build();
    }

    static PersonInfoDTO map(Person person) {
        return PersonInfoDTO.builder()
                .name(person.getName())
                .surname(person.getSurname())
                .orders(mapOrderList(person.getOrders()))
                .email(person.getEmail())
                .phone(person.getPhone())
                .build();
    }

    static List<UserOrderDTO> mapOrderList(List<PersonOrder> orders) {
        return orders.stream().map(EntityMapper::map).collect(Collectors.toList());
    }

    static List<ProductDTO> mapProductList(List<Product> products) {
        return products.stream().map(EntityMapper::map).collect(Collectors.toList());
    }
}
