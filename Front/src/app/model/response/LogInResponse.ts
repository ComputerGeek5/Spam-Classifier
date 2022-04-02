import {Mail} from '../Mail';
import {Role} from '../Role';

export class LogInResponse {
  private _user: {
    id: number,
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    occupation: string;
    location: string;
    inbox: Mail[];
    sent: Mail[];
    role: Role;
  };
  private _token: string;

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get user(): { id: number; username: string; password: string; firstName: string; lastName: string; gender: string; birthday: string; occupation: string; location: string; inbox: Mail[]; sent: Mail[]; role: Role } {
    return this._user;
  }

  set user(value: { id: number; username: string; password: string; firstName: string; lastName: string; gender: string; birthday: string; occupation: string; location: string; inbox: Mail[]; sent: Mail[]; role: Role }) {
    this._user = value;
  }
}
