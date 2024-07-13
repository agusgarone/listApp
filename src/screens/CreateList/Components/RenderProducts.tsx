import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../../../models/product';
import theme from '../../../common/theme';

const RenderProduct = ({
  item,
  onPress,
}: {
  item: IProduct;
  onPress: ({item}: {item: IProduct}) => void;
}) => {
  return (
    <View style={style.view}>
      <Text>{item.name}</Text>
      <Text>Cancel</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: theme.colors.grey,
    marginVertical: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RenderProduct;
