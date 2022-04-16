import {User} from './User';

export class Mail {
  id: number;
  subject: string;
  message: string;
  createdAt: string;
  sender: User;
  receiver: User;
}
