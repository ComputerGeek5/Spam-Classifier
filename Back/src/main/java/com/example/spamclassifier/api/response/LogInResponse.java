package com.example.spamclassifier.api.response;

import com.example.spamclassifier.dto.UserDTO;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LogInResponse {

    private UserResponse userResponse;
    private String token;
}
