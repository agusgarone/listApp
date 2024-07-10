import {StyleSheet, Text, View} from 'react-native';
import theme from '../common/theme';
import {IProduct} from '../models/product';
import {IList} from '../models/list';

const RenderItem = ({
  item,
  type,
}: {
  item: IProduct | IList;
  type: 'remove' | 'check' | 'none';
}) => {
  return (
    <View style={style.view}>
      <Text>{item.name}</Text>
      <SecondElement type={type} />
    </View>
  );
};

const SecondElement = ({type}: {type: 'remove' | 'check' | 'none'}) => {
  if (type === 'remove') {
    return <Text>Cancel</Text>;
  }
  if (type === 'check') {
    return <Text>Accept</Text>;
  }
};

const style = StyleSheet.create({
  view: {
    borderColor: theme.colors.grey,
    borderBottomWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RenderItem;
