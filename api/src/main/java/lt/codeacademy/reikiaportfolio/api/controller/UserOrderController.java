package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.Endpoint;
import lt.codeacademy.reikiaportfolio.api.dto.CreateOrderDTO;
import lt.codeacademy.reikiaportfolio.api.dto.UserOrderDTO;
import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.Product;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import lt.codeacademy.reikiaportfolio.service.ProductService;
import lt.codeacademy.reikiaportfolio.service.UserOrderService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.lang.Long;
import java.util.Optional;

import static lt.codeacademy.reikiaportfolio.api.utils.EntityMapper.map;
import static lt.codeacademy.reikiaportfolio.api.utils.EntityMapper.mapOrderList;

@RestController
@RequestMapping(Endpoint.ORDERS)
@Api(tags = "This is Order controller")
public class UserOrderController {

    private final UserOrderService userOrderService;
    private final MyUserDetailsService myUserDetailsService;
    private final ProductService productService;

    public UserOrderController(UserOrderService userOrderService, MyUserDetailsService myUserDetailsService, ProductService productService) {
        this.userOrderService = userOrderService;
        this.myUserDetailsService = myUserDetailsService;
        this.productService = productService;
    }

    @GetMapping
    @ApiOperation(value = "Get all order", tags = "getOrders", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Kai sekmingai grazina uzsakymus"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public List<UserOrderDTO> getOrders() {
        return mapOrderList(userOrderService.getAllOrders());
    }

    @GetMapping(path = Endpoint.GET_ORDER_BY_ID_PATH)
    @ApiOperation(value = "Get order by id", tags = "getOrder", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Kai sekmingai grazina uzsakyma"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public UserOrderDTO getOrderById(@PathVariable(Endpoint.ORDER_ID) Long id) {
        return map(userOrderService.getById(id));
    }

    @PostMapping
    @ApiOperation(value = "Create order", httpMethod = "POST")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Kai sekmingai sukuriamas uzsakymas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.CREATED)
    public void createOrder(@Valid @RequestBody CreateOrderDTO createOrderDTO) {
        Person person;
        Product product;
        person = myUserDetailsService.loadUserByUsername(createOrderDTO.getEmail());
        product = productService.getById(createOrderDTO.getProduct());
        userOrderService.createorUpdateOrder(map(createOrderDTO, person, product));
    }

    @DeleteMapping(value = Endpoint.GET_ORDER_BY_ID_PATH)
    @ApiOperation(value = "Delete order", httpMethod = "DELETE")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Kai sekmingai istrinamas uzsakymas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrder(@PathVariable(Endpoint.ORDER_ID) Long uuid) {
        userOrderService.delete(uuid);
    }

    @PutMapping
    @ApiOperation(value = "Update order", httpMethod = "PUT")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Kai sekmingai paupdateinamas uzsakymas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProduct(@Valid @RequestBody PersonOrder order) {
        userOrderService.createorUpdateOrder(order);
    }
}
