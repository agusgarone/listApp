import React from 'react';
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
import {NavigationContext} from '@react-navigation/native';
import RenderProduct from './Components/RenderProducts';
import {IProduct} from '../../models/product';

const SelectList = ({route}: any) => {
  const {key, name, params} = route;
  const navigation = React.useContext(NavigationContext);

  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.selectList}>
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
          <View style={Style.header}>
            <Text>{params?.item?.name}</Text>
            <TouchableOpacity style={Style.button}>
              <Text>Actions</Text>
            </TouchableOpacity>
          </View>
          <List data={params?.item?.products} render={_renderProducts} />
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
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: theme.colors.grey,
    borderRadius: 16,
  },
});

export default SelectList;
