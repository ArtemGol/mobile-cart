import type {IProduct} from '../../../src/api/dto/IProduct';

export interface ICartProduct extends IProduct {
  count: number;
}

export interface ICart {
  products: ICartProduct[];
}
