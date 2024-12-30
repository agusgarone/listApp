import {useContext} from 'react';
import {IProduct} from '../../../models/product';
import {NavigationContext} from '@react-navigation/native';
import {FormikState} from 'formik';
import {FORM_STATUS} from '../../../common/utils/formStatus';
import {CreateProduct} from '../../../services/Product';
import {Alert, Keyboard} from 'react-native';
import {categories} from '../../../data-mock';

export const createProductController = () => {
  const navigation = useContext(NavigationContext);

  const handleFormikSubmit = async (
    values: {name: string; category: number | undefined},
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
      resetForm: (nextState?: Partial<FormikState<any>>) => void;
    },
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    if (values.name) {
      const newProduct: IProduct = {
        id: Math.floor(Math.random() * 900000) + 100000,
        name: values.name,
        categoria: categories.find(
          category => category.id === values.category,
        ) || {id: 1, name: 'Fruta'},
      };
      CreateProduct(newProduct);
      Keyboard.dismiss();
      actions.resetForm();
      navigation?.goBack();
    } else {
      Alert.alert(
        'Hubo un error al crear el producto, intentelo de nuevo por favor!',
      );
    }
  };

  const goBack = () => navigation?.goBack();

  return {
    handleFormikSubmit,
    goBack,
  };
};
