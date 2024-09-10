import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import theme from '../common/theme';

const Input = ({
  label,
  placeholder,
  isPassword,
  style,
  error,
  value,
  onChangeText,
  saveForm,
}: any) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(isPassword ? true : false);

  useEffect(() => {
    if (saveForm) {
      setFocus(false);
    }
  }, [saveForm]);

  const styles = StyleSheet.create({
    scrollView: {
      overflow: 'hidden',
    },
    container: {
      ...style,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: focus ? theme.colors.primary : 'transparent',
      width: '100%',
      borderWidth: 2,
      borderRadius: 12,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 16,
      justifyContent: 'space-between',
    },
    error: {
      borderColor: 'red',
    },
  });

  const stylesToViewInput = [styles.container, error && styles.error];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="handled">
      {label && (
        <Text
          style={{
            color: theme.colors.primary,
            fontSize: theme.fontSize.l,
            marginBottom: 8,
          }}>
          {label}
        </Text>
      )}
      <View style={stylesToViewInput}>
        <TextInput
          blurOnSubmit={saveForm}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{flex: 1, color: theme.colors.black}}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.grey}
          secureTextEntry={showPassword}
          value={value}
          onChangeText={onChangeText}
        />
        {/* {isPassword &&
          (showPassword ? (
            <EyeOn
              fill={
                focus
                  ? theme.secondaryColor[scheme]
                  : theme.iconDisabled[scheme]
              }
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <EyeOff
              fill={
                focus
                  ? theme.secondaryColor[scheme]
                  : theme.iconDisabled[scheme]
              }
              onPress={() => setShowPassword(!showPassword)}
            />
          ))}
        {Icon && <Icon fill={iconStyles} />} */}
      </View>
    </ScrollView>
  );
};

export default Input;
