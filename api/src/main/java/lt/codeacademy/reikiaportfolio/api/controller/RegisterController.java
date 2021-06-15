package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.Endpoint;
import lt.codeacademy.reikiaportfolio.api.dto.UserRegistrationDTO;
import lt.codeacademy.reikiaportfolio.api.utils.EntityMapper;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(Endpoint.SIGNUP)
@Api(tags = "This is Register controller")
public class RegisterController {

    private final MyUserDetailsService myUserDetailsService;

    @Autowired
    public RegisterController(MyUserDetailsService applicationUserService) {
        this.myUserDetailsService = applicationUserService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "Create user", httpMethod = "POST")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Kai sekmingai sukuriamas useris")
    })
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewUser(@Valid @RequestBody UserRegistrationDTO userRegistration) {
        Person person = EntityMapper.map(userRegistration);
        myUserDetailsService.createNewApplicationUser(person);
    }
}
