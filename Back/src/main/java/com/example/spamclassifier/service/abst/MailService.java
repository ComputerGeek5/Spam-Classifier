package com.example.spamclassifier.service.abst;

import com.example.spamclassifier.dto.MailDTO;
import com.example.spamclassifier.dto.UserDTO;
import com.example.spamclassifier.service.CRUDService;

import java.util.List;

public interface MailService extends CRUDService<MailDTO> {

    List<MailDTO> findAllByReceiverOrderByCreatedAtDesc(UserDTO receiver);

    List<MailDTO> findAllBySenderOrderByCreatedAtDesc(UserDTO sender);
}
