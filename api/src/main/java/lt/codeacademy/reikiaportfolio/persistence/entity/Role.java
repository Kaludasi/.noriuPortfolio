package lt.codeacademy.reikiaportfolio.persistence.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Role implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String roleName;

    public Role(Long id, String roleName) {

    }

    public Role() {

    }

    @Override
    public String getAuthority() {
        return "ROLE_" + roleName;
    }
}
