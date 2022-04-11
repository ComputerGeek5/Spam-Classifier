package com.example.spamclassifier.api.response;

import com.example.spamclassifier.dto.MailDTO;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InboxResponse {

    private List<MailDTO> mails;
}
