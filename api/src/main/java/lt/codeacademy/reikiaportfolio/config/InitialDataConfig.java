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
            myUserDetailsService.createNewApplicationUser(Person.builder()
                    .name("Adminas")
                    .surname("Adminauskas")
                    .email("admin@gmail.com")
                    .phone("691337420")
                    .role(roleService.getById(1L))
                    .password("admin")
                    .orders(List.of())
                    .build());
            myUserDetailsService.createNewApplicationUser(Person.builder()
                    .name("Useris")
                    .surname("Useriauskas")
                    .email("user@gmail.com")
                    .phone("84864345")
                    .role(roleService.getById(2L))
                    .password("user")
                    .orders(List.of())
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
