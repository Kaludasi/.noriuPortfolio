package lt.codeacademy.reikiaportfolio.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.reikiaportfolio.api.exceptions.product.ProductNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;
import lt.codeacademy.reikiaportfolio.persistence.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public void createorUpdateProduct(Product product) {
        productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public void delete(UUID id) {
        productRepository.deleteById(id);
    }

    public Product getById(UUID id) {
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id.toString()));
    }
}
