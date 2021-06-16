package lt.codeacademy.reikiaportfolio.persistence.repository;

import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import lt.codeacademy.reikiaportfolio.persistence.entity.PersonOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserOrderRepository extends JpaRepository<PersonOrder, Long> {

    List<PersonOrder> getAllByCustomer(Person person);
}
