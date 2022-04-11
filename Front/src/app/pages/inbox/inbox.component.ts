import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import {Mail} from '../../model/Mail';
import {MailService} from '../../service/mail/mail.service';
import {InboxRequest} from '../../model/request/InboxRequest';
import {AuthService} from '../../security/auth/auth.service';

@Component({
  selector: "app-inbox",
  templateUrl: "inbox.component.html"
})
export class InboxComponent implements OnInit {
  success = "";
  inbox: Mail[] = [];

  constructor(private router: Router, private mailService: MailService, private authService: AuthService) {
    let navigation = this.router.getCurrentNavigation();

    if (navigation.extras !== null && navigation.extras.state !== undefined) {
      let state = navigation.extras.state as {data: string};
      this.success = state.data;
    }
  }

  ngOnInit() {
    let inboxRequest: InboxRequest = new InboxRequest();
    inboxRequest.userId = this.authService.getSessionUser().id;

    this.mailService.getInbox(inboxRequest).subscribe(
      (result) => {
        this.inbox = result;
      }
    );
  }
}
