import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {Formik} from 'formik';

import {FormikInputValue} from '../../../components/FormikInput';
import {IProduct} from '../../../models/product';
import {Products} from '../../../data-mock';

interface IBottomSheetForm {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setValues: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const initialValues = {
  textSearched: '',
};

const BottomSheetForm = ({
  setSearch,
  setMessage,
  setValues,
}: IBottomSheetForm) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleFormikSubmit({textSearched: query});
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleFormikSubmit = async (values: {textSearched: string}) => {
    // actions.setStatus(FORM_STATUS.idle);
    setSearch(true);
    console.log(values);
    const productsFilter = Products.filter(value =>
      value.name
        .toLocaleLowerCase()
        .includes(values.textSearched.toLocaleLowerCase()),
    );
    setValues(productsFilter);
    Keyboard.dismiss();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="textSearched"
              placeholder={'buscar producto'}
              onChange={value => handleInputChange(value)}
            />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default BottomSheetForm;
