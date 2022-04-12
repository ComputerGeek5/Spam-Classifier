package com.example.spamclassifier.repository;

import com.example.spamclassifier.dto.UserDTO;
import com.example.spamclassifier.model.Mail;
import com.example.spamclassifier.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MailRepository extends JpaRepository<Mail, Long> {
    List<Mail> findAllByReceiverOrderByCreatedAtDesc(User receiver);
}