import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../common/theme';
import {IProduct} from '../../../models/product';

const RenderItem = ({item}: {item: IProduct}) => {
  return (
    <View style={style.view}>
      <Text>{item.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
    marginVertical: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RenderItem;
