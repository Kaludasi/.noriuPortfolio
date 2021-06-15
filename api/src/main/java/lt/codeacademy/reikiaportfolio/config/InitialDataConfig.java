package lt.codeacademy.reikiaportfolio.config;

import lt.codeacademy.reikiaportfolio.persistence.entity.Role;
import lt.codeacademy.reikiaportfolio.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class InitialDataConfig implements ApplicationListener<ContextRefreshedEvent> {
    private final RoleService roleService;

    @Autowired
    public InitialDataConfig(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if (roleService.getAll().isEmpty()) {
            roleService.createNew(new Role(1L, "ADMIN"));
            roleService.createNew(new Role(2L, "USER"));
        }
    }
}
