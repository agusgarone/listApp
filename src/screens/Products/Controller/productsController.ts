import {useContext, useEffect, useState} from 'react';
import {IProduct} from '../../../models/product';
import {GlobalStateService} from '../../../services/globalStates';
import {NavigationContext} from '@react-navigation/native';
import {getAllProducts} from '../../../services/Product';

export const productsController = () => {
  const navigation = useContext(NavigationContext);
  const products: IProduct[] = GlobalStateService.getProductsSelected();
  const [allProducts, setAllProducts] = useState<IProduct[]>(products);

  const fetchProducts = async () => {
    const responseGetAllProducts = await getAllProducts();
    setAllProducts(responseGetAllProducts);
  };

  const goToCreateProduct = () => navigation?.navigate('CreateProduct');

  const goToEditProduct = (id: number) =>
    navigation?.navigate('CreateProduct', {id: id});

  useEffect(() => {
    navigation?.addListener('focus', () => {
      fetchProducts();
    });
  }, []);

  return {
    allProducts,
    goToCreateProduct,
    goToEditProduct,
  };
};
