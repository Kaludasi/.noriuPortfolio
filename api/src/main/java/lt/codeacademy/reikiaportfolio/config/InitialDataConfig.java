package lt.codeacademy.reikiaportfolio.config;

import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;
import lt.codeacademy.reikiaportfolio.persistence.entity.Role;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import lt.codeacademy.reikiaportfolio.service.ProductService;
import lt.codeacademy.reikiaportfolio.service.RoleService;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class InitialDataConfig implements ApplicationListener<ContextRefreshedEvent> {
    private final RoleService roleService;
    private final MyUserDetailsService myUserDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final ProductService productService;

    public InitialDataConfig(RoleService roleService, MyUserDetailsService myUserDetailsService, PasswordEncoder passwordEncoder, ProductService productService) {
        this.roleService = roleService;
        this.myUserDetailsService = myUserDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.productService = productService;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if (roleService.getAll().size() == 0){
            roleService.createNew(new Role(1L, "ADMIN"));
            roleService.createNew(new Role(2L, "USER"));
        }
        if (myUserDetailsService.getUserInfoByEmail("admin@gmail.com") == null){
            myUserDetailsService.createNewApplicationUser(Person.PersonBuilder.aPerson()
                    .withName("Adminas")
                    .withSurname("Adminauskas")
                    .withEmail("admin@gmail.com")
                    .withPhone("691337420")
                    .withRole(roleService.getById(1L))
                    .withPassword("admin")
                    .build());
            myUserDetailsService.createNewApplicationUser(Person.PersonBuilder.aPerson()
                    .withName("Useris")
                    .withSurname("Useriauskas")
                    .withEmail("user@gmail.com")
                    .withPhone("84864345")
                    .withRole(roleService.getById(2L))
                    .withPassword("user")
                    .build());
        }
        if (productService.getAllProducts().size() == 0) {
            productService.createorUpdateProduct(Product.builder()
                    .name("web cb")
                    .description("labai geras web cv")
                    .price(BigDecimal.valueOf(50))
                    .build());
            productService.createorUpdateProduct(Product.builder()
                    .name("web portfolio")
                    .description("labai geras web portfolio")
                    .price(BigDecimal.valueOf(70))
                    .build());
        }
    }
}
