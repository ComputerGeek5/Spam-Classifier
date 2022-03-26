package com.example.spamclassifier.dto;

import com.example.spamclassifier.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MailDTO {

    private Integer id;
    private String subject;
    private String message;
    private LocalDateTime createdAt;
    private UserDTO sender;
    private UserDTO receiver;
}
