package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.dto.ProductDTO;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;
import lt.codeacademy.reikiaportfolio.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import lt.codeacademy.reikiaportfolio.api.Endpoint;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

import static lt.codeacademy.reikiaportfolio.api.utils.EntityMapper.map;
import static lt.codeacademy.reikiaportfolio.api.utils.EntityMapper.mapProductList;

@RestController
@RequestMapping(Endpoint.PRODUCTS)
@Api(tags = "This is Product controller")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    @ApiOperation(value = "Get all product", tags = "getProducts", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Kai sekmingai grazina produktus"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public List<ProductDTO> getProducts() {
        return mapProductList(productService.getAllProducts());
    }

    @GetMapping(path = Endpoint.GET_PRODUCT_BY_ID_PATH)
    @ApiOperation(value = "Get product by id", tags = "getProduct", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Kai sekmingai grazina produkta"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public ProductDTO getProductById(@PathVariable(Endpoint.PRODUCT_ID) UUID id) {
        return map(productService.getById(id));
    }

    @PostMapping
    @ApiOperation(value = "Create product", httpMethod = "POST")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Kai sekmingai sukuriamas produktas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@Valid @RequestBody ProductDTO product) {
        System.out.println(product.toString());
        productService.createorUpdateProduct(map(product));
    }

    @DeleteMapping(value = Endpoint.GET_PRODUCT_BY_ID_PATH)
    @ApiOperation(value = "Delete product", httpMethod = "DELETE")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Kai sekmingai istrinamas produktas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable(Endpoint.PRODUCT_ID) UUID uuid) {
        productService.delete(uuid);
    }

    @PutMapping
    @ApiOperation(value = "Update product", httpMethod = "PUT")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Kai sekmingai paupdateinamas produktas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@Valid @RequestBody Product product) {
        productService.createorUpdateProduct(product);
    }
}
