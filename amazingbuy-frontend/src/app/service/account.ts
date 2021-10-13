import { Order } from './order';

export class Account {
  accountId!: number;
  fullName!: string;
  email!: string;
  password!: string;
  accountType!: string;
  dateOfBirth!: string;
  order!: Order[];
}
