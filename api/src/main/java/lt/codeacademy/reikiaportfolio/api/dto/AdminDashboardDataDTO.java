package lt.codeacademy.reikiaportfolio.api.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class AdminDashboardDataDTO {

    int activeOrdersCount;
    BigDecimal totalProfitCount;
    int completedOrderCount;
}
