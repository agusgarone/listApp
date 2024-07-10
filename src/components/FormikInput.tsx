import React, {useField} from 'formik';
import {View, Text} from 'react-native';
import theme from '../common/theme';
import Input from './Input';

export const FormikInputValue = ({
  name,
  label,
  placeholder,
  isPassword,
  Icon,
  iconStyles,
  styles,
  disabled,
  saveForm,
}: any) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles}>
      <Input
        label={label}
        placeholder={placeholder}
        isPassword={isPassword}
        error={meta.error}
        value={field.value}
        onChangeText={(value: any) => {
          helpers.setTouched(value.trim() !== meta.initialValue.trim());
          helpers.setValue(value);
        }}
        Icon={Icon}
        iconStyles={iconStyles}
        disabled={disabled}
        saveForm={saveForm}
      />
      {meta.error && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: theme.fontSize.s,
            }}>
            {meta.error}
          </Text>
        </View>
      )}
    </View>
  );
};
