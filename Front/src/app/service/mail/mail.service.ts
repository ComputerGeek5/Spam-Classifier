import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {InboxRequest} from '../../model/request/InboxRequest';
import {Observable} from 'rxjs';
import {Mail} from '../../model/Mail';
import {ComposeRequest} from '../../model/request/ComposeRequest';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private baseUrl = environment.back_domain;

  constructor(private http: HttpClient) { }

  getInbox(userId: number): Observable<Mail[]> {
    let endpoint: string = this.baseUrl + `inbox/${userId}`;

    return this.http.get<any>(endpoint, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(map(
      (response) => {
        if (response.status === 200) {
          return response.data.mails;
        } else {
          throw new Error(response.message);
        }
      },
      (error) => {
        throw new Error(error)
      }
    ));
  }

  getSent(userId: number): Observable<Mail[]> {
    let endpoint: string = this.baseUrl + `sent/${userId}`;

    return this.http.get<any>(endpoint, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(map(
      (response) => {
        if (response.status === 200) {
          return response.data.mails;
        } else {
          throw new Error(response.message);
        }
      },
      (error) => {
        throw new Error(error)
      }
    ));
  }

  compose(request: ComposeRequest) {
    let endpoint: string = this.baseUrl + `compose`;

    return this.http.post<any>(endpoint, request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(map(
      (response) => {
        return response;
      },
      (error) => {
        throw new Error(error)
      }
    ));
  }

  mark(id: number) {
    let endpoint: string = this.baseUrl + `mark/${id}`;

    return this.http.post<any>(endpoint, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(map(
      (response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.message);
        }
      },
      (error) => {
        throw new Error(error)
      }
    ));
  }

  delete(id: number) {
    let endpoint: string = this.baseUrl + `delete/${id}`;

    return this.http.post<any>(endpoint, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).pipe(map(
      (response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.message);
        }
      },
      (error) => {
        throw new Error(error)
      }
    ));
  }
}
