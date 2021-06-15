package lt.codeacademy.reikiaportfolio.service;

import lt.codeacademy.reikiaportfolio.persistence.entity.Role;
import lt.codeacademy.reikiaportfolio.persistence.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public void createNew(Role role) {
        roleRepository.save(role);
    }

    public void deleteById(Long id) {
        roleRepository.deleteById(id);
    }

    public void update(Role role) {
        Role oldRole = roleRepository.getOne(role.getId());
        oldRole.setRoleName(role.getRoleName());
    }

    public Role getById(Long id) {
        return roleRepository.getById(id);
    }

    public List<Role> getAll() {
        return roleRepository.findAll();
    }
}
