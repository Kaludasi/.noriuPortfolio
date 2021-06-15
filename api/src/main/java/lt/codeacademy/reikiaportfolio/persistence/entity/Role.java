package lt.codeacademy.reikiaportfolio.persistence.entity;

import io.swagger.annotations.ApiModelProperty;
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
    @ApiModelProperty(notes = "Role id", value = "2L", name = "id")
    private long id;
    @ApiModelProperty(notes = "Status", value = "luakiamaApmokejimo", name = "status")
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
