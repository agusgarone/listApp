import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import List from '../../components/List';
import FloatButton from '../../components/FloatButton';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {NavigationContext} from '@react-navigation/native';
import {GlobalStateService} from '../../services/globalStates';
import {IProduct} from '../../models/product';
import RenderProduct from './Components/RenderProducts';

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

  const handleSubmit = () => {};

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
                <Text>Atras</Text>
              </TouchableOpacity>
            }
            right={<></>}
            key={'Header'}
          />
          <View style={Style.content}>
            <View style={Style.first}>
              <List data={products} render={_renderProducts} />
            </View>
            <View style={Style.second}>
              <FloatButton onPress={onPress} />
            </View>
          </View>
          <Button children="Listo" isDisabled={true} key={'Button'} />
        </View>
      </>
    </SafeAreaView>
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
    paddingHorizontal: 24,
    paddingVertical: 32,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  first: {
    flex: 5,
  },
  second: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default CreateList;
