import { Order } from './order';

export class Account {
  id!: number;
  fullName!: string;
  email!: string;
  password!: string;
  accountType!: string;
  dateOfBirth!: string;
  order!: Order[];
  isSigned:boolean = false;
}
