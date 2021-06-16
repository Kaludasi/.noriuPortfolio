package lt.codeacademy.reikiaportfolio.service;

import lt.codeacademy.reikiaportfolio.api.dto.PersonInfoDTO;
import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserAlreadyExistsException;
import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
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

    @Autowired
    public MyUserDetailsService(RoleRepository roleRepository,
                                PasswordEncoder passwordEncoder,
                                UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
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

    public void addOrder(PersonOrder personOrder){
        Person customer = loadUserByUsername(personOrder.getCustomer().getEmail());
        customer.addOrder(personOrder);
        userRepository.save(customer);
    }

    public PersonInfoDTO getUserInfoByEmail(String email) {
        Optional<Person> person = userRepository.findByEmail(email);
        return person.map(value -> PersonInfoDTO.builder()
                .email(value.getEmail())
                .phone(value.getPhone())
                .name(value.getName())
                .surname(value.getSurname())
                .orders(mapOrderList(value.getOrders()))
                .build()).orElseThrow(() -> new UserNotFoundException(email));
    }

    public Person getById(Long id){
        return userRepository.getById(id);
    }
}

