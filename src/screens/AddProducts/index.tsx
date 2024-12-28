import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Content from './components/Content';
import Header from '../../components/Header';
import {NavigationContext} from '@react-navigation/native';
import {useContext} from 'react';
import theme from '../../common/theme';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const AddProducts = () => {
  const navigation = useContext(NavigationContext);

  return (
    <SafeAreaView style={Style.screen}>
      <Header
        center={<></>}
        left={
          <TouchableOpacity onPress={() => navigation?.goBack()}>
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
