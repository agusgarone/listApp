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
import {RemoveList} from '../../services/List';

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
              <Text style={Style.text}>Atras</Text>
            </TouchableOpacity>
          }
          right={<></>}
          key={'Header'}
        />
        <View style={Style.content}>
          <View style={Style.header}>
            <Text style={Style.nameList}>{params?.item?.name}</Text>
            <View style={{flexDirection: 'row', gap: 8}}>
              {params?.item && (
                <TouchableOpacity
                  style={Style.delete}
                  onPress={() => {
                    RemoveList(params?.item);
                    navigation?.setParams({item: undefined});
                    navigation?.navigate('Home');
                  }}>
                  <Text style={Style.buttonText}>Delete</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={Style.action}>
                <Text style={Style.buttonText}>Actions</Text>
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
  },
  buttonText: {
    color: theme.colors.white,
  },
  nameList: {
    color: theme.colors.black,
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
  },
  text: {
    color: theme.colors.grey,
  },
});

export default SelectList;
