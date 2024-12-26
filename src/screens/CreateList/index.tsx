import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import theme from '../../common/theme';

import Header from '../../components/Header';
import {NavigationContext} from '@react-navigation/native';
import {IProduct} from '../../models/product';
import CreateListForm from '../../screens/CreateList/Components/Form';
import {GlobalStateService} from '../../services/globalStates';
import RenderProduct from '../../screens/CreateList/Components/RenderProducts';
import FloatButton from '../../components/FloatButton';

const CreateList = () => {
  const navigation = React.useContext(NavigationContext);
  const products: IProduct[] = GlobalStateService.getProductsSelected();
  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} onPress={() => null} />;
  };
  const onPress = useCallback(() => {
    navigation?.navigate('AddProducts');
  }, []);

  return (
    <SafeAreaView style={Style.createList}>
      <Header
        center={<></>}
        left={
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Text style={Style.text}>Atras</Text>
          </TouchableOpacity>
        }
        right={<></>}
        key={'Header'}
      />
      <View style={Style.content}>
        <CreateListForm
          children={
            <Content
              products={products}
              _renderProducts={_renderProducts}
              onPress={onPress}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const Content = ({
  products,
  _renderProducts,
  onPress,
}: {
  products: IProduct[];
  _renderProducts: ({item}: {item: IProduct}) => React.JSX.Element;
  onPress: () => void;
}) => {
  return (
    <>
      <View style={Style.first}>
        <FlatList
          style={{flex: 1}}
          data={products}
          renderItem={_renderProducts}
          ListEmptyComponent={() => (
            <View style={Style.noProducts}>
              <Text style={Style.text}>¡Agregá tus productos!</Text>
            </View>
          )}
        />
      </View>
      <View style={Style.second}>
        <FloatButton onPress={onPress} />
      </View>
    </>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bottomSheetBackground: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetContent: {
    flex: 1,
  },
  createList: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  first: {
    flex: 5,
  },
  noProducts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  second: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  text: {
    color: theme.colors.grey,
  },
});

export default CreateList;
