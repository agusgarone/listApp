import {IProduct} from '../models/product';
import {StorageService} from '../storage/asyncStorage';

export const CreateProduct = (product: IProduct) => {
  StorageService.getItem('products').then((response: IProduct[]) => {
    const products = response;
    if (products) {
      const productExist = products?.find(value => value.name === product.name);
      if (productExist) {
        console.log('El producto ya existe');
      } else {
        const productsArray = [...products, product];
        StorageService.setItem('products', productsArray);
      }
    } else {
      StorageService.setItem('products', [product]);
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

export const EditProduct = (product: IProduct) => {
  StorageService.getItem('products').then((response: IProduct[]) => {
    const products = response;
    const productArray = products.map(value => {
      if (value.id === product.id) {
        return product;
      }
      return value;
    });
    StorageService.setItem('products', productArray);
  });
};

export const getAllProducts = async function () {
  const response: IProduct[] = await StorageService.getItem('products');
  return response;
};

export const getProductByID = async function (id: number) {
  const response: IProduct[] = await StorageService.getItem('products');
  const findProduct = response.find(it => it.id === id);
  if (findProduct) {
    return findProduct;
  }
  return null;
};
