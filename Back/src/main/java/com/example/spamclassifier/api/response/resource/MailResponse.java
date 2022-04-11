package com.example.spamclassifier.api.response.resource;

import com.example.spamclassifier.dto.MailDTO;
import com.example.spamclassifier.dto.UserDTO;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MailResponse {

    private Long id;
    private String subject;
    private String message;
    private LocalDateTime createdAt;
    private UserResponse sender;
    private UserResponse receiver;

    public static class MailResponseBuilder {

        public MailResponseBuilder fromDTO(MailDTO mail) {
            this.id = mail.getId();
            this.subject = mail.getSubject();
            this.message = mail.getMessage();
            this.createdAt = mail.getCreatedAt();

            this.sender = UserResponse.builder()
                    .fromDTO(mail.getSender())
                    .build();

            this.receiver = UserResponse.builder()
                    .fromDTO(mail.getReceiver())
                    .build();

            return this;
        }
    }
}
