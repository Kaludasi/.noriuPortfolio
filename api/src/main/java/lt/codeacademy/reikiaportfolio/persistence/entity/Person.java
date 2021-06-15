package lt.codeacademy.reikiaportfolio.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@ToString(exclude = "password")
@Entity
@Builder
@Table(
        uniqueConstraints = {@UniqueConstraint(columnNames = {"email"})}
)
public class Person implements UserDetails {

    @Id
    @GeneratedValue
    @ApiModelProperty(notes = "personId", value = "1", name = "id")
    private Long id;
    @ApiModelProperty(notes = "Name", value = "luakiamaApmokejimo", name = "name")
    private String name;
    @ApiModelProperty(notes = "Surname", value = "luakiamaApmokejimo", name = "surname")
    private String surname;
    @Column(name = "email")
    @ApiModelProperty(notes = "Email", value = "luakiamaApmokejimo", name = "status")
    private String email;
    @JsonIgnore
    @ApiModelProperty(notes = "Password", value = "luakiamaApmokejimo", name = "password")
    private String password;
    @OneToOne
    @ApiModelProperty(notes = "Role", value = "luakiamaApmokejimo", name = "role")
    private Role role;
    @ApiModelProperty(notes = "Phone", value = "luakiamaApmokejimo", name = "phone")
    private String phone;
    @OneToMany(orphanRemoval = true)
    @ApiModelProperty(notes = "Order", value = "orders", name = "orders")
    List<PersonOrder> orders;

    protected Person() {
    }

    public Person(Long id, String name, String surname, String email, String password, Role role, String phone, List<PersonOrder> orders) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.setPassword(password);
        this.role = role;
        this.phone = phone;
        this.orders = orders;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Set.of(role);
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}


