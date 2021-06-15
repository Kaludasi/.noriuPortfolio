package lt.codeacademy.reikiaportfolio.persistence.repository;

import lt.codeacademy.reikiaportfolio.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    Product getByName(String name);
}
