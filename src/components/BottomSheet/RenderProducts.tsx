import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IProduct} from '../../models/product';
import theme from '../../common/theme';

const RenderProduct = ({
  item,
  onPress,
  isSelected,
}: {
  isSelected: boolean;
  item: IProduct;
  onPress: ({item}: {item: IProduct}) => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        style.view,
        isSelected
          ? {borderColor: theme.colors.primary}
          : {borderColor: theme.colors.grey},
      ]}
      onPress={() => onPress({item})}>
      <Text style={style.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  view: {
    borderWidth: 1,
    marginVertical: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.grey,
  },
});

export default RenderProduct;
