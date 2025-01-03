import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IProduct} from '../../../models/product';
import theme from '../../../common/theme';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const RenderProduct = ({
  item,
  onPress,
}: {
  item: IProduct;
  onPress: ({item}: {item: IProduct}) => void;
}) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>{item.name}</Text>
      <Icon
        name="times"
        type={IconType.FontAwesome}
        size={25}
        color={theme.colors.grey}
        // onPress={goBack}
      />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.white,
    marginHorizontal: 3,
    marginTop: 2,
    marginBottom: 5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  text: {
    color: theme.colors.grey,
  },
});

export default RenderProduct;
