package lt.codeacademy.reikiaportfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collections;

@Configuration
public class SwaggerConfiguration {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(getApiInfo());
    }

    private ApiInfo getApiInfo() {
        return new ApiInfo("reikiaportfolio API",
                "My custom shop API",
                "1.0",
                "Shop API terms",
                new Contact("Klaudijus Simokaitis", "www.codeacademy.lt", "simokaitis.klaudijus@codeacademylt.onmicrosoft.com"),
                "Shop API License",
                "Shop API URL",
                Collections.emptyList());
    }
}
