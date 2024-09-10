import {StyleSheet, Text, View} from 'react-native';
import theme from '../common/theme';

const FloatButton = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={style.view} onTouchEnd={() => onPress()}>
      <Text style={style.text}>plus</Text>
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
    borderRadius: 12,
  },
  text: {
    color: theme.colors.white,
  },
});

export default FloatButton;
