package lt.codeacademy.reikiaportfolio.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long id;
    private String name;
    private String surname;
    @Column(name = "email")
    private String email;
    @JsonIgnore
    private String password;
    @OneToOne
    private Role role;
    private String phone;
    @OneToMany
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


