package com.example.spamclassifier.controller.api;

import com.example.spamclassifier.controller.api.response.BodyResponse;
import com.example.spamclassifier.service.abst.MailService;
import com.example.spamclassifier.service.abst.UserService;
import com.example.spamclassifier.util.annotation.BaseURL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@BaseURL
@RestController
public class InboxController {

    private final UserService userService;
    private final MailService mailService;

    @Autowired
    public InboxController(UserService userService, MailService mailService) {
        this.userService = userService;
        this.mailService = mailService;
    }

    @GetMapping("/inbox")
    @ResponseBody
    public BodyResponse getReceivedMails() {
        return null;
    }


    @PostMapping("/compose")
    @ResponseBody
    public BodyResponse compose() {
        return null;
    }
}
