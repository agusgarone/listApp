import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {IList} from '../../../models/list';
import theme from '../../../common/theme';

const RenderList = ({item}: {item: IList}) => {
  const navigation = React.useContext(NavigationContext);

  const onPress = () => {
    navigation?.navigate('SelectList', {item: item});
  };

  return (
    <TouchableOpacity style={style.view} onPress={onPress}>
      <Text style={style.name}>{item.name}</Text>
      <Text style={style.subtitle}>
        {`${item.products.length} ${
          item.products.length === 1 ? 'producto' : 'productos'
        }`}
      </Text>
      <Text>{`Creada el ${item.fechaAlta}`}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  view: {
    borderColor: theme.colors.grey,
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: theme.fontSize.xxxl,
    color: theme.colors.black,
  },
  subtitle: {
    fontSize: theme.fontSize.l,
    marginBottom: 4,
  },
});

export default RenderList;
