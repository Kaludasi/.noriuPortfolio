package lt.codeacademy.reikiaportfolio.service;

import lt.codeacademy.reikiaportfolio.api.exceptions.order.OrderNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import lt.codeacademy.reikiaportfolio.persistence.repository.UserOrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOrderService {

    private final UserOrderRepository userOrderRepository;

    public UserOrderService(UserOrderRepository userOrderRepository) {
        this.userOrderRepository = userOrderRepository;
    }

    public void createorUpdateOrder(PersonOrder personOrder) {
        userOrderRepository.save(personOrder);
    }

    public List<PersonOrder> getAllOrders() {
        return userOrderRepository.findAll();
    }

    public void delete(Long id) {
        userOrderRepository.deleteById(id);
    }

    public PersonOrder getById(Long id) {
        return userOrderRepository.findById(id).orElseThrow(() -> new OrderNotFoundException(id.toString()));
    }

    public List<PersonOrder> getOrdersByUser(Person person) {
        return userOrderRepository.getAllByCustomer(person);
    }
}
