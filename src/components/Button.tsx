import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../common/theme';
// import theme from '../theme';
// import {useTheme} from '../ThemeProvider';

interface IButton {
  isDisabled?: boolean;
  pressableDisabled?: boolean;
  children: string;
  onPress?: () => void;
}

const Button = ({
  children,
  onPress,
  pressableDisabled,
  isDisabled,
}: IButton) => {
  //   const {scheme} = useTheme();
  const buttonStyles = [
    {backgroundColor: theme.colors.primary},
    isDisabled && styles.disabledOpacity,
    styles.button,
  ];

  return (
    <View>
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
        disabled={isDisabled}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 4,
  },
  buttonText: {
    // fontFamily: theme.font.principalMedium,
    fontSize: theme.fontSize.l,
    letterSpacing: 0.25,
    marginBottom: 1,
  },
  disabledOpacity: {
    opacity: 0.5,
  },
  disabled: {},
});

export default Button;
