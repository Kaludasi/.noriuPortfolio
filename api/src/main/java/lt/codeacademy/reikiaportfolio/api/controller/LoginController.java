package lt.codeacademy.reikiaportfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.reikiaportfolio.api.dto.UserLoginDTO;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/login")
@Api(tags = "This is login controller")
public class LoginController {

    @PostMapping
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Kai sekmingai prisijungiama"),
            @ApiResponse(code = 403, message = "Neturit permisionu prisijungt"),
            @ApiResponse(code = 401, message = "Prisijunkite jei norit prisijungt")
    })
    public UserLoginDTO login(@AuthenticationPrincipal Person person){
        return UserLoginDTO.builder().email(person.getEmail()).fullName(person.getName() + " " + person.getSurname()).role(person.getRole()).build();
    }
}
