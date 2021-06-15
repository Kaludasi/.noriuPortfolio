package lt.codeacademy.reikiaportfolio.api.utils.validation;

import lt.codeacademy.reikiaportfolio.api.dto.UserRegistrationDTO;
import lt.codeacademy.reikiaportfolio.api.utils.validation.annotation.Password;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordValidator implements ConstraintValidator<Password, UserRegistrationDTO> {

    @Override
    public boolean isValid(UserRegistrationDTO userRegistrationDTO, ConstraintValidatorContext constraintValidatorContext) {
        return userRegistrationDTO.getPassword().equals(userRegistrationDTO.getRepeatPassword());
    }
}
