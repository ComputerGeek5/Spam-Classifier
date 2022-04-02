package com.example.spamclassifier.controller;

import com.example.spamclassifier.api.mapper.SignUpRequestMapper;
import com.example.spamclassifier.api.request.LogInRequest;
import com.example.spamclassifier.api.request.SignUpRequest;
import com.example.spamclassifier.api.response.BodyResponse;
import com.example.spamclassifier.api.response.LogInResponse;
import com.example.spamclassifier.api.response.SignUpResponse;
import com.example.spamclassifier.api.response.UserResponse;
import com.example.spamclassifier.dto.UserDTO;
import com.example.spamclassifier.enumerator.Role;
import com.example.spamclassifier.exception.CustomException;
import com.example.spamclassifier.service.abst.AuthService;
import com.example.spamclassifier.service.abst.UserService;
import com.example.spamclassifier.util.JWTUtil;
import com.example.spamclassifier.util.annotation.BaseURL;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@BaseURL
@RestController
@Slf4j
public class AuthController {

    private final PasswordEncoder passwordEncoder;

    private final UserService userService;

    private final AuthService authService;

    private final JWTUtil jwtUtil;

    @Autowired
    public AuthController(PasswordEncoder passwordEncoder, UserService userService, AuthService authService, JWTUtil jwtUtil) {
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
        this.authService = authService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public BodyResponse signUp(@RequestBody SignUpRequest request) {
        BodyResponse response;

        try {
            UserDTO user = SignUpRequestMapper.INSTANCE.toDTO(request);
            user.setRole(Role.USER);
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user = userService.save(user);

            SignUpResponse signUpResponse = SignUpResponse.builder()
                    .fromDTO(user)
                    .build();

            response = new BodyResponse(signUpResponse)
                    .status(HttpStatus.OK.value())
                    .message("Sign Up successful.");
        } catch (Exception e) {
            response = new BodyResponse()
                    .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message("Something went wrong, please try again !");
        }

        return response;
    }

    @PostMapping("/login")
    public BodyResponse logIn(@RequestBody LogInRequest request) {
        BodyResponse response;

        try {
            authService.authenticate(request);
            UserDTO user = userService.findByUsername(request.getUsername());

            String token = jwtUtil.generateToken(user);
            UserResponse userResponse = UserResponse.builder()
                    .fromDTO(user)
                    .build();
            LogInResponse logInResponse = new LogInResponse(userResponse, token);

            response = new BodyResponse(logInResponse)
                    .status(HttpStatus.OK.value())
                    .message("Log In successful.");
        } catch(CustomException e) {
            log.error("", e);
            response = new BodyResponse(e.getMessage())
                    .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message("Something went wrong, please try again !");
        } catch (Exception e) {
            log.error("", e);
            response = new BodyResponse()
                    .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message("Something went wrong, please try again !");
        }

        return response;
    }
}
