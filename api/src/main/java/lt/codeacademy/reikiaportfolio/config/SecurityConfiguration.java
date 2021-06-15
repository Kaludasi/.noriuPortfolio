package lt.codeacademy.reikiaportfolio.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.reikiaportfolio.security.JwtAuthenticationFilter;
import lt.codeacademy.reikiaportfolio.security.JwtAuthorizationFilter;
import lt.codeacademy.reikiaportfolio.security.JwtService;
import lt.codeacademy.reikiaportfolio.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.AntPathMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final MyUserDetailsService myUserDetailsService;
    private final ObjectMapper objectMapper;
    private final JwtService jwtService;

    @Autowired
    public SecurityConfiguration(PasswordEncoder passwordEncoder, MyUserDetailsService myUserDetailsService, ObjectMapper objectMapper, JwtService jwtService) {
        this.passwordEncoder = passwordEncoder;
        this.myUserDetailsService = myUserDetailsService;
        this.objectMapper = objectMapper;
        this.jwtService = jwtService;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(myUserDetailsService)
                .passwordEncoder(passwordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"/products", "/products/*").permitAll()
                .antMatchers(HttpMethod.POST,"/signup", "/login", "/orders/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), objectMapper, jwtService))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtService));
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }


}
