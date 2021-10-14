import { Category } from './category';
import { Order } from './order';

export class Product {
  productId!: number;
  name!: string;
  productImageURL!: string;
  productPrice!: number;
  productQuantity!: number;
  productLongDescription!: string;
  productShortDescription!: string;
  productRating!: number;
  category!: Category;
  orders!: Order[];
}
