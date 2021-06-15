package lt.codeacademy.reikiaportfolio.persistence.repository;

import lt.codeacademy.reikiaportfolio.api.exceptions.user.UserNotFoundException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource(exported = false)
public interface UserRepository extends JpaRepository<Person, Long> {

    Optional<Person> findByEmail(String email) throws UserNotFoundException;
}