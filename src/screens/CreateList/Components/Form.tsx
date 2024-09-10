import React, {useContext} from 'react';
import {View, StyleSheet, Keyboard, Alert} from 'react-native';
import {Formik, FormikState} from 'formik';
import {FORM_STATUS} from '../../../common/utils/formStatus';
import {FormikInputValue} from '../../../components/FormikInput';
import Button from '../../../components/Button';
import moment from 'moment';
import {IList} from '../../../models/list';
import {CreateList} from '../../../services/List';
import {GlobalStateService} from '../../../services/globalStates';
import {IProduct} from '../../../models/product';
import {NavigationContext} from '@react-navigation/native';

const initialValues = {
  name: '',
};

const CreateListForm = ({children}: {children: JSX.Element}) => {
  const products: IProduct[] = GlobalStateService.getProductsSelected();
  const navigation = useContext(NavigationContext);

  const handleFormikSubmit = async (
    values: {name: string},
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
      resetForm: (nextState?: Partial<FormikState<any>>) => void;
    },
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    if (values.name) {
      const newList: IList = {
        fechaAlta: moment().format('DD-MM-YYYY'),
        name: values.name,
        products,
        id: Math.floor(Math.random() * 900000) + 100000,
      };
      CreateList(newList);
      Keyboard.dismiss();
      GlobalStateService.setProductsSelected([]);
      actions.resetForm();
      navigation?.navigate('Home');
    } else {
      Alert.alert('Agregá un nombre a la lista, por favor!');
    }
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
