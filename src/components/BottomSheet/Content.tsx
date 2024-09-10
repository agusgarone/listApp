import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheetForm from './Form';
import Button from '../Button';
import List from '../List';
import {IProduct} from '../../models/product';
import {GlobalStateService} from '../../services/globalStates';
import RenderProduct from './RenderProducts';
interface IBottomSheet {
  onDismiss: () => void;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  animation: boolean;
}

const Content = ({onDismiss}: IBottomSheet) => {
  const [search, setSearch] = useState(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [values, setValues] = useState<IProduct[]>([]);
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
    onDismiss();
  };

  const _renderProducts = ({item}: {item: IProduct}) => {
    const findProd = productsSelected.find(prod => prod.id === item.id);
    const isSelected = findProd !== undefined;
    return (
      <RenderProduct item={item} isSelected={isSelected} onPress={onPress} />
    );
  };

  return (
    <>
      <View style={styles.centeredView}>
        <BottomSheetForm
          key={'form-bottom-sheet'}
          setSearch={setSearch}
          setShowError={setShowError}
          setMessage={setMessage}
          setValues={setValues}
        />
        <View style={styles.containerResult}>
          <View style={styles.containerList}>
            <List data={values} render={_renderProducts} />
          </View>
          <View style={styles.containerButton}>
            <Button onPress={handleButton}>{'Agregar'}</Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    display: 'flex',
  },
  containerResult: {
    flex: 6,
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    maxHeight: 450,
  },
  containerList: {
    flex: 2,
    width: '100%',
    display: 'flex',
  },
  containerButton: {
    flex: 1,
    width: '100%',
    display: 'flex',
    paddingTop: 12,
  },
});

export default Content;
