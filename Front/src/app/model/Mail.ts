export class Mail {
  private _id: number;
  private _subject: string;
  private _message: string;
  private _createdAt: string;
  private _sender: string;
  private _receiver: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  get sender(): string {
    return this._sender;
  }

  set sender(value: string) {
    this._sender = value;
  }

  get receiver(): string {
    return this._receiver;
  }

  set receiver(value: string) {
    this._receiver = value;
  }
}
