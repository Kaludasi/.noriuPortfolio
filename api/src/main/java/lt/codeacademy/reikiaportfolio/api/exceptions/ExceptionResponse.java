package lt.codeacademy.reikiaportfolio.api.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Getter
public class ExceptionResponse {
    private final String message;
    private final int status;
    private final Long timeStamp;

    public ExceptionResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status.value();
        timeStamp = LocalDateTime.now().atZone(ZoneOffset.systemDefault()).toInstant().toEpochMilli();
    }
}
