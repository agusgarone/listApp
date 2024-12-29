import {useContext, useState} from 'react';
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
    console.log('responseGetAllProducts', responseGetAllProducts);
    setAllProducts(responseGetAllProducts);
  };

  const goToCreateProduct = () => navigation?.navigate('CreateProduct');

  //   const onPress = ({item}: {item: IProduct}) => {
  //     if (productsSelected.length) {
  //       const alreadyExist = productsSelected.find(prod => prod.id === item.id);
  //       if (alreadyExist) {
  //         const newArray = productsSelected.filter(prod => prod.id !== item.id);
  //         setProductsSelected(newArray);
  //       } else {
  //         setProductsSelected([...productsSelected, item]);
  //       }
  //     } else {
  //       setProductsSelected([...productsSelected, item]);
  //     }
  //   };

  //   const handleButton = () => {
  //     GlobalStateService.setProductsSelected(productsSelected);
  //     navigation?.navigate('CreateList', {params: productsSelected});
  //   };

  return {
    allProducts,
    fetchProducts,
    goToCreateProduct,
  };
};
