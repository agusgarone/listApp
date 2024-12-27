import {useContext} from 'react';
import {IProduct} from '../../../models/product';
import {GlobalStateService} from '../../../services/globalStates';
import {NavigationContext} from '@react-navigation/native';
import {FormikState} from 'formik';
import {FORM_STATUS} from '../../../common/utils/formStatus';
import moment from 'moment';
import {IList} from '../../../models/list';
import {CreateList} from '../../../services/List';
import {Alert, Keyboard} from 'react-native';

export const createListController = () => {
  const navigation = useContext(NavigationContext);
  const products: IProduct[] = GlobalStateService.getProductsSelected();

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

  const goBack = () => navigation?.goBack();

  const goToAddProducts = () => navigation?.navigate('AddProducts');

  return {
    products,
    handleFormikSubmit,
    goBack,
    goToAddProducts,
  };
};
