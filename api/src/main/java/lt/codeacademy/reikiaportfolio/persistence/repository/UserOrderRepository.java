package lt.codeacademy.reikiaportfolio.persistence.repository;

import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserOrderRepository extends JpaRepository<PersonOrder, Long> {

    List<PersonOrder> getAllByCustomer(Person person);
}
