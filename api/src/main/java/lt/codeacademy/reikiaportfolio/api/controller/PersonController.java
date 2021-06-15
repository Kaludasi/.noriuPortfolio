package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.Endpoint;
import lt.codeacademy.reikiaportfolio.api.dto.PersonInfoDTO;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(Endpoint.PERSON)
@Api(tags = "This is person controller")
public class PersonController {

    private final MyUserDetailsService myUserDetailsService;

    public PersonController(MyUserDetailsService myUserDetailsService) {
        this.myUserDetailsService = myUserDetailsService;
    }

    @GetMapping
    @ApiOperation(value = "Get person info", tags = "getPersonInfo", httpMethod = "GET")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Kai sekmingai grazina person info"),
            @ApiResponse(code = 403, message = "Neturit permisionu gauti atsakymas"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit gauti atsakyma")
    })
    public PersonInfoDTO getPersonInfo(@RequestParam String email) {
        return myUserDetailsService.getUserInfoByEmail(email);
    }
}
