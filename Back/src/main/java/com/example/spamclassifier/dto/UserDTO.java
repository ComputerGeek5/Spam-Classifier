package com.example.spamclassifier.dto;

import com.example.spamclassifier.model.Mail;
import com.example.spamclassifier.model.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String gender;
    private LocalDate date;
    private String occupation;
    private String location;
    private List<MailDTO> inbox;
    private List<MailDTO> sent;
    private RoleDTO role;
}
