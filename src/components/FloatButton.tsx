import {StyleSheet, Text, View} from 'react-native';
import theme from '../common/theme';

const FloatButton = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={style.view} onTouchEnd={() => onPress()}>
      <Text>hola</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.primary,
    width: 56,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default FloatButton;
