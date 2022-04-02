import {Role} from './Role';
import {Mail} from './Mail';
import {LogInResponse} from './response/LogInResponse';

export class User {
  private _id: number;
  private _username: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _gender: string;
  private _birthday: string;
  private _occupation: string;
  private _location: string;
  private _inbox: Mail[];
  private _sent: Mail[];
  private _role: Role;

  constructor(response: LogInResponse) {
    this._id = response.user.id;
    this._username = response.user.username;
    this._firstName = response.user.firstName;
    this._lastName = response.user.lastName;
    this._gender = response.user.gender;
    this._birthday = response.user.birthday;
    this._occupation = response.user.occupation;
    this._location = response.user.location;
    this._inbox = response.user.inbox;
    this._sent = response.user.sent;
    this._role = response.user.role;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get occupation(): string {
    return this._occupation;
  }

  set occupation(value: string) {
    this._occupation = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get inbox(): Mail[] {
    return this._inbox;
  }

  set inbox(value: Mail[]) {
    this._inbox = value;
  }

  get sent(): Mail[] {
    return this._sent;
  }

  set sent(value: Mail[]) {
    this._sent = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }
}
