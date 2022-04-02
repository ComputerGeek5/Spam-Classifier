package com.example.spamclassifier.api.response;

import com.example.spamclassifier.dto.UserDTO;
import com.example.spamclassifier.enumerator.Gender;
import com.example.spamclassifier.enumerator.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SignUpResponse {

    private Long id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private Gender gender;
    private LocalDate birthday;
    private String occupation;
    private String location;
    private Role role;

    public static class SignUpResponseBuilder {

        public SignUpResponseBuilder fromDTO(UserDTO user) {
            this.id = user.getId();
            this.username = user.getUsername();
            this.password = user.getPassword();
            this.firstName = user.getFirstName();
            this.lastName = user.getLastName();
            this.gender = user.getGender();
            this.birthday = user.getBirthday();
            this.occupation = user.getOccupation();
            this.location = user.getLocation();
            this.role = user.getRole();

            return this;
        }
    }
}
