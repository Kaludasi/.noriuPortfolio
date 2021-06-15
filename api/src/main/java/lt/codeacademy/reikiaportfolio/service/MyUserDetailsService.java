package lt.codeacademy.reikiaportfolio.service;

import lt.codeacademy.reikiaportfolio.api.dto.PersonInfoDTO;
import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserAlreadyExistsException;
import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.repository.RoleRepository;
import lt.codeacademy.reikiaportfolio.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static lt.codeacademy.reikiaportfolio.api.utils.EntityMapper.mapOrderList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserOrderService userOrderService;

    @Autowired
    public MyUserDetailsService(RoleRepository roleRepository,
                                PasswordEncoder passwordEncoder,
                                UserRepository userRepository,
                                UserOrderService userOrderService) {
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.userOrderService = userOrderService;
    }

    @Override
    public Person loadUserByUsername(String name) throws UsernameNotFoundException {
        return userRepository.findByEmail(name).orElseThrow(() -> new UserNotFoundException(name));
    }

    public void createNewApplicationUser(Person person) throws UserAlreadyExistsException {
        person.setRole(roleRepository.getById(2L));
        person.setPassword(passwordEncoder.encode(person.getPassword()));
        try {
            userRepository.save(person);
        } catch (RuntimeException e) {
            throw new UserAlreadyExistsException(person.getEmail());
        }
    }

    public PersonInfoDTO getUserInfoByEmail(String email) {
        Optional<Person> person = userRepository.findByEmail(email);
        return person.map(value -> PersonInfoDTO.builder()
                .email(value.getEmail())
                .phone(value.getPhone())
                .name(value.getName())
                .surname(value.getSurname())
                .orders(mapOrderList(userOrderService.getOrdersByUser(value)))
                .build()).orElseThrow(() -> new UserNotFoundException(email));
    }
}

