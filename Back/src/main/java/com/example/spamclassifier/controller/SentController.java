package com.example.spamclassifier.controller;

import com.example.spamclassifier.api.response.BodyResponse;
import com.example.spamclassifier.service.abst.MailService;
import com.example.spamclassifier.service.abst.UserService;
import com.example.spamclassifier.util.annotation.BaseURL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@BaseURL
@RestController
public class SentController {

    private final UserService userService;
    private final MailService mailService;

    @Autowired
    public SentController(UserService userService, MailService mailService) {
        this.userService = userService;
        this.mailService = mailService;
    }

    @GetMapping("/sent")
    @ResponseBody
    public BodyResponse getSentMails() {
        return null;
    }
}
