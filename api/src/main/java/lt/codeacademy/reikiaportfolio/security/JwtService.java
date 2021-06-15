package lt.codeacademy.reikiaportfolio.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lt.codeacademy.reikiaportfolio.persistence.entity.Person;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

import static io.jsonwebtoken.SignatureAlgorithm.HS512;
import static java.util.List.of;

@Service
public class JwtService {

    private final long tokenValidityInMillis;
    private final byte[] secretKey;

    public JwtService(@Value("#{${security.jwt.validTimeInMins} * 60000}") long tokenValidityInMillis,
                      @Value("${security.jwt.secret}") byte[] secretKey) {
        this.tokenValidityInMillis = tokenValidityInMillis;
        this.secretKey = secretKey;
    }

    public String createToken(Person person) {
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setIssuer("noriuPortfolio-api")
                .setExpiration(new Date(now.getTime() + tokenValidityInMillis))
                .setAudience("noriuPortfolio-ui")
                .setSubject(person.getEmail())
                .claim("role", person.getRole().getRoleName())
                .signWith(Keys.hmacShaKeyFor(secretKey), HS512).compact();
    }

    public Authentication parseToken(String jwt) {
        Claims parsedJwtBody;
        try {
            parsedJwtBody = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(jwt)
                    .getBody();
        } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException | IllegalArgumentException e) {
            return null;
        }
        String username = parsedJwtBody.getSubject();
        List<GrantedAuthority> roles = of(new SimpleGrantedAuthority("ROLE_" + parsedJwtBody.get("role", String.class)));
        return new UsernamePasswordAuthenticationToken(username, null, roles);
    }
}
