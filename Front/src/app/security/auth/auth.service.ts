import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {LogInRequest} from '../../model/request/LogInRequest';
import {SignUpRequest} from '../../model/request/SignUpRequest';
import {LogInResponse} from '../../model/response/LogInResponse';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:8000/mail/';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  logIn(request: LogInRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', request, {headers: new HttpHeaders(
      { 'Content-Type': 'application/json' })}
    ).pipe(map((response: LogInResponse) => {
      let logedUser: any = new User(response);
      logedUser = JSON.stringify(logedUser);
      sessionStorage.setItem('user', logedUser);
      sessionStorage.setItem('token', 'Bearer ' + response.token);
    }));
  }

  signUp(request: SignUpRequest) {
    let endpoint = this.baseUrl + 'signup';

    return this.http.post<any>(endpoint, request,
      {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map(
      (response) => {
        return response;
      },
      (error) => {
        return error;
      }
    ));
  }

  logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    this.router.navigateByUrl('signin');
  }

  isLogedIn() {
    return sessionStorage.getItem('token') !== null;
  }

  getSessionUser(): User {
    const userKey = sessionStorage.getItem('user');

    if (userKey !== null) {
      return JSON.parse(userKey);
    }

    return null;
  }

  getToken() {
    return sessionStorage.getItem('token') as string;
  }
}
