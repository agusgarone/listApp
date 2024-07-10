import React from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {Formik} from 'formik';
import Button from '../Button';

import {FormikInputValue} from '../FormikInput';
import {FORM_STATUS} from '../../common/utils/formStatus';
import {IProduct} from '../../models/product';
import {Products} from '../../data-mock';

interface IBottomSheetForm {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setValues: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const initialValues = {
  textSearched: '',
};

const BottomSheetForm = ({
  setSearch,
  setShowError,
  setMessage,
  setValues,
}: IBottomSheetForm) => {
  const handleFormikSubmit = async (
    values: {textSearched: string},
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    },
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    setSearch(true);
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
              // Icon={Search}
              iconStyles={'red'}
              styles={{
                width: '100%',
                marginBottom: 16,
                paddingHorizontal: 24,
              }}
            />
            <View style={{width: '100%', paddingHorizontal: 24}}>
              <Button children={'buscar'} onPress={handleSubmit} />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default BottomSheetForm;
