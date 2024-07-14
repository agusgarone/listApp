import React from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {Formik} from 'formik';
import {FORM_STATUS} from '../../../common/utils/formStatus';
import {FormikInputValue} from '../../../components/FormikInput';
import Button from '../../../components/Button';
import moment from 'moment';
import {IList} from '../../../models/list';
import {CreateList} from '../../../services/List';
import {GlobalStateService} from '../../../services/globalStates';
import {IProduct} from '../../../models/product';

const initialValues = {
  name: '',
};

const CreateListForm = ({children}: {children: JSX.Element}) => {
  const products: IProduct[] = GlobalStateService.getProductsSelected();

  const handleFormikSubmit = async (
    values: {name: string},
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    },
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    const newList: IList = {
      fechaAlta: moment().format('DD-MM-YYYY'),
      name: values.name,
      products,
      id: Math.floor(Math.random() * 900000) + 100000,
    };
    CreateList(newList);
    Keyboard.dismiss();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name="name"
              placeholder={'Nombre de la lista'}
              iconStyles={'red'}
              styles={{
                width: '100%',
                marginBottom: 16,
              }}
            />
            {children}
            <Button
              children="Listo"
              isDisabled={false}
              onPress={handleSubmit}
              key={'Button'}
            />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});

export default CreateListForm;
