import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Mail} from '../../model/Mail';
import {MailService} from '../../service/mail/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  mail: Mail;
  permissions: string[];

  constructor(private mailService: MailService, private route: ActivatedRoute, private router: Router) {
    let state = this.router.getCurrentNavigation().extras.state;

    this.mail = state.mail;
    this.permissions = state.permissions;
  }

  ngOnInit(): void { }

  delete() {
    try {
      this.mailService.delete(this.mail.id).subscribe(
        (response) => {
          const navigationExtras: NavigationExtras = {state: {success: response.message}};
          this.router.navigate(['inbox'], navigationExtras);
        }
      )
    } catch (error) {
      const navigationExtras: NavigationExtras = {state: {error: error.message}};
      this.router.navigate(['inbox'], navigationExtras);
    }
  }

  mark() {
    try {
      this.mailService.mark(this.mail.id).subscribe(
        (response) => {
          const navigationExtras: NavigationExtras = {state: {success: response.message}};
          this.router.navigate(['inbox'], navigationExtras);
        }
      )
    } catch (error) {
      const navigationExtras: NavigationExtras = {state: {error: error.message}};
      this.router.navigate(['inbox'], navigationExtras);
    }
  }
}
