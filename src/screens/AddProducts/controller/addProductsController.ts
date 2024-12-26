import {useContext, useState} from 'react';
import {IProduct} from '../../../models/product';
import {GlobalStateService} from '../../../services/globalStates';
import {NavigationContext} from '@react-navigation/native';

export const addProductsController = () => {
  const navigation = useContext(NavigationContext);
  const products: IProduct[] = GlobalStateService.getProductsSelected();
  const [productsSelected, setProductsSelected] =
    useState<IProduct[]>(products);

  const onPress = ({item}: {item: IProduct}) => {
    if (productsSelected.length) {
      const alreadyExist = productsSelected.find(prod => prod.id === item.id);
      if (alreadyExist) {
        const newArray = productsSelected.filter(prod => prod.id !== item.id);
        setProductsSelected(newArray);
      } else {
        setProductsSelected([...productsSelected, item]);
      }
    } else {
      setProductsSelected([...productsSelected, item]);
    }
  };

  const handleButton = () => {
    GlobalStateService.setProductsSelected(productsSelected);
    navigation?.navigate('CreateList', {params: productsSelected});
  };

  return {
    productsSelected,
    onPress,
    handleButton,
  };
};
