import { Account } from './account';
import { Product } from './product';

export class Order {
  id!: number;
  isPaid!: boolean;
  isShipped!: boolean;
  shippingAddress!: string;
  timeStamp!: string;
  account!: Account;
  products!: Product[];
}
