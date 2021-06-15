package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.dto.AdminDashboardDataDTO;
import lt.codeacademy.reikiaportfolio.service.UserOrderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequestMapping("/admin")
@Api(tags = "This is admin controller")
public class AdminController {

    private final UserOrderService userOrderService;

    public AdminController(UserOrderService userOrderService) {
        this.userOrderService = userOrderService;
    }

    @GetMapping
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Kai sekmingai gaunamas atsakymas"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymo"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public AdminDashboardDataDTO getAdminDashboardData() {
        return AdminDashboardDataDTO.builder()
                .completedOrderCount((int) userOrderService.getAllOrders()
                        .stream()
                        .filter(order -> order.getStatus().equals("Ivykdyta")).count())
                .activeOrdersCount((int) userOrderService.getAllOrders()
                        .stream()
                        .filter(order -> order.getStatus().equals("Vykdoma") || order.getStatus().equals("Priimta")).count())
                .totalProfitCount(userOrderService.getAllOrders()
                        .stream()
                        .map(userOrder -> userOrder.getProduct().getPrice())
                        .reduce(BigDecimal::add)
                        .orElse(BigDecimal.valueOf(0)))
                .build();
    }
}
