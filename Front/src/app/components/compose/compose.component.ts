import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {UserService} from '../../service/user/user.service';
import {MailService} from '../../service/mail/mail.service';
import {ComposeRequest} from '../../model/request/ComposeRequest';
import {AuthService} from '../../security/auth/auth.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  success = '';
  error = '';

  users: User[] = [];

  form = new FormGroup({
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    receiver: new FormControl('', Validators.required),
  });

  get subject() {
    return this.form.get("subject");
  }

  get message() {
    return this.form.get("message");
  }

  get receiver() {
    return this.form.get("receiver");
  }

  constructor(private userService: UserService, private mailService: MailService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    try {
      let authenticatedId = this.authService.getSessionUser().id;
      this.userService.findAll()
        .subscribe(
          (response) => {
            for (let user of response) {
              if (user.id !== authenticatedId) {
                this.users.push(user);
              }
            }
          }
        );
    } catch (error) {
      this.error = error.message;
    }
  }

  compose() {
    let composeRequest: ComposeRequest = new ComposeRequest();
    composeRequest.subject = this.subject.value;
    composeRequest.message = this.message.value;
    composeRequest.receiver = (new User().id = this.receiver.value);
    composeRequest.sender = this.authService.getSessionUser();

    try {
      this.mailService.compose(composeRequest)
        .subscribe(
          (response) => {
            if (response.status === 200) {
              // const navigationExtras: NavigationExtras = {state: {data: response.message}};
              // this.router.navigate(['inbox'], navigationExtras);
            } else {
              this.error = response.message;
            }
          }
        )
    } catch (error) {
      this.error = "Something went wrong, please try again later !";
    }
  }
}
