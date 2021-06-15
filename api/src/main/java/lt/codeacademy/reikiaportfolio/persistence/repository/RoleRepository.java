package lt.codeacademy.reikiaportfolio.persistence.repository;

import lt.codeacademy.reikiaportfolio.persistence.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
