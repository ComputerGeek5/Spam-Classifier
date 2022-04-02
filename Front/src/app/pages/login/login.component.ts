import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../security/auth/auth.service';
import {LogInRequest} from '../../model/request/LogInRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';

  private isLoged = false;
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoged = this.authService.isLogedIn();

    if(this.isLoged) {
      this.router.navigate(['inbox']);
    }
  }

  logIn() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    const request: LogInRequest = new LogInRequest();
    request.username = username;
    request.password = password;

    this.authService.logIn(request).subscribe(() => {
      this.router.navigate(['inbox']);
    }, () => {
      this.error = 'Something went wrong';
    });
  }
}
