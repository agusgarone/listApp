import React from 'react';
import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {NavigationContext} from '@react-navigation/native';
import {GlobalStateService} from '../../services/globalStates';
import {IProduct} from '../../models/product';
import RenderProduct from './Components/RenderProducts';
import CreateListForm from './Components/Form';
import theme from '../../common/theme';

const CreateList = () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState<boolean>(false);
  const navigation = React.useContext(NavigationContext);
  const products: IProduct[] = GlobalStateService.getProductsSelected();

  const onPress = () => {
    setShow(true);
    setAnimation(true);
  };

  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} onPress={() => null} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <>
        <BottomSheet
          animation={animation}
          onDismiss={() => setShow(false)}
          show={show}
          setAnimation={setAnimation}
          key={'BottomSheet'}
        />
        <View style={Style.createList}>
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
                  _renderProducts={_renderProducts}
                  onPress={onPress}
                  products={products}
                />
              }
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

const Content = ({
  products,
  _renderProducts,
  onPress,
}: {
  products: IProduct[];
  _renderProducts: any;
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
  createList: {
    flex: 1,
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
