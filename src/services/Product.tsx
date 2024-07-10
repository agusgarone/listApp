import {IProduct} from '../models/product';
import StorageService from './asyncStorage';

export const CreateProduct = (product: IProduct) => {
  StorageService.getItem('products').then((response: IProduct[]) => {
    const products = response;
    const productExist = products.find(value => value.name === product.name);
    if (productExist) {
      console.log('El producto ya existe');
    } else {
      const productsArray = [...products, product];
      StorageService.setItem('products', productsArray);
    }
  });
};

export const RemoveProduct = (product: IProduct) => {
  StorageService.getItem('products').then((response: IProduct[]) => {
    const products = response;
    const productArray = products.filter(value => value.name === product.name);
    StorageService.setItem('products', productArray);
  });
};
