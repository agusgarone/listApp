import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import List from '../../components/List';
import theme from '../../common/theme';
import {IProduct} from '../../models/product';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import RenderProduct from '../AddProducts/components/RenderProducts';
import {Products as Productos} from '../../data-mock';
import Button from '../../components/Button';
import {productsController} from './Controller/productsController';

const Products = ({route}: any) => {
  const {allProducts, fetchProducts, goToCreateProduct} = productsController();

  const _renderProducts = ({item}: {item: IProduct}) => {
    return (
      <RenderProduct item={item} isSelected={false} onPress={() => null} />
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.selectList}>
        <Header
          center={<></>}
          left={
            <TouchableOpacity onPress={() => null}>
              <Icon
                name="arrow-left"
                type={IconType.FontAwesome}
                size={25}
                color={theme.colors.grey}
                onPress={() => {}}
              />
            </TouchableOpacity>
          }
          right={<></>}
          key={'Header'}
        />
        <View style={Style.content}>
          <View style={Style.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={Style.action}>
                <Text style={Style.buttonText}>Filtros</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Style.containerList}>
            <List data={Productos} render={_renderProducts} />
          </View>
          <View style={Style.containerButton}>
            <Button
              children="Agregar"
              isDisabled={false}
              type="primary"
              onPress={goToCreateProduct}
              key={'Button'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  selectList: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  delete: {
    padding: 10,
    backgroundColor: theme.colors.red,
    borderRadius: 16,
  },
  action: {
    padding: 10,
    width: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.m,
    fontWeight: '600',
  },
  containerList: {
    flex: 9,
    display: 'flex',
  },
  containerButton: {
    flex: 1,
    display: 'flex',
  },
});

export default Products;
