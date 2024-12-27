import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IList} from '../../../models/list';
import theme from '../../../common/theme';

const RenderList = ({item}: {item: IList}) => {
  const onPress = () => {
    // navigation?.navigate('SelectList', {item: item});
    // * Aca deberia de ir a la nueva pantalla donde podes ver el detalle de la lista e ir tachando lo que ya tenes
  };

  return (
    <TouchableOpacity style={style.view} onPress={onPress}>
      <Text style={style.name}>{item.name}</Text>
      <Text style={style.subtitle}>
        {`${item.products.length} ${
          item.products.length === 1 ? 'producto' : 'productos'
        }`}
      </Text>
      <Text style={style.date}>{`Creada el ${item.fechaAlta}`}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.white,
    marginHorizontal: 3,
    marginVertical: 5,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 3,
  },
  name: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  subtitle: {
    fontSize: theme.fontSize.l,
    marginBottom: 4,
    color: theme.colors.grey,
  },
  date: {
    color: theme.colors.grey,
  },
});

export default RenderList;
