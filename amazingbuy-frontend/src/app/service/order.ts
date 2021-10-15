import { Account } from './account';
import { Product } from './product';

export class Order {
  id!: number;
  paid!: boolean;
  shipped!: boolean;
  shippingAddress!: string;
  timestamp!: string;
  account!: Account;
  products!: Product[];
}
