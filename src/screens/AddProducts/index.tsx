import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Content from './components/Content';
import Header from '../../components/Header';
import theme from '../../common/theme';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {addProductsController} from './controller/addProductsController';

const AddProducts = () => {
  const {goBack} = addProductsController();

  return (
    <SafeAreaView style={Style.screen}>
      <Header
        center={<></>}
        left={
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="arrow-left"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.grey}
              onPress={goBack}
            />
          </TouchableOpacity>
        }
        right={<></>}
        key={'Header'}
      />
      <Content />
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: theme.colors.grey,
  },
});

export default AddProducts;
