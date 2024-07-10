import {IProduct} from '../models/product';

export interface IList {
  id: number;
  fechaAlta: string;
  name: string;
  products: IProduct[];
}
