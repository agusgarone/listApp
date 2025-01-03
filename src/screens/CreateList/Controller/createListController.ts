import {useContext, useEffect, useMemo, useState} from 'react';
import {IProduct} from '../../../models/product';
import {GlobalStateService} from '../../../services/globalStates';
import {NavigationContext, RouteProp} from '@react-navigation/native';
import {FormikState} from 'formik';
import {FORM_STATUS} from '../../../common/utils/formStatus';
import moment from 'moment';
import {IList} from '../../../models/list';
import {CreateList, EditList, getListByID} from '../../../services/List';
import {Alert, Keyboard} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RootTabParamList} from '../../../models/RootTabParamList';

type CreateListScreenRouteProp = RouteProp<RootTabParamList, 'CreateList'>;

export const createListController = () => {
  const navigation = useContext(NavigationContext);
  const route = useRoute<CreateListScreenRouteProp>();
  const [products, setProducts] = useState<IProduct[]>(
    GlobalStateService.getProductsSelected(),
  );
  const [list, setList] = useState<IList | null>(null);
  const [initialValues, setInitialValues] = useState({
    name: '',
  });

  useEffect(() => {
    navigation?.addListener('focus', () => {
      if (route?.params?.id) {
        getList(parseInt(route?.params?.id, 10));
      }
    });
  }, []);

  useEffect(() => {
    if (list) {
      console.log('list', list);
      setInitialValues({
        name: list?.name || '',
      });
    }
    if (list?.products) {
      setProducts(list?.products);
      GlobalStateService.setProductsSelected(list?.products);
    }
  }, [list]);

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
      if (route?.params?.id && list) {
        const editList: IList = {
          fechaAlta: list.fechaAlta,
          name: values.name,
          products: products ?? [],
          id: list.id,
        };
        EditList(editList);
        setList(null);
      } else {
        const newList: IList = {
          fechaAlta: moment().format('DD-MM-YYYY'),
          name: values.name,
          products: products ?? [],
          id: Math.floor(Math.random() * 900000) + 100000,
        };
        CreateList(newList);
      }
      Keyboard.dismiss();
      GlobalStateService.setProductsSelected([]);
      actions.resetForm();
      navigation?.navigate('Home');
    } else {
      Alert.alert('Agregá un nombre a la lista, por favor!');
    }
  };

  const getList = async (id: number) => {
    const response = await getListByID(id);
    if (!list && response) {
      setList(response);
    }
  };

  const goToAddProducts = () => navigation?.navigate('AddProducts');

  return {
    products,
    handleFormikSubmit,
    goToAddProducts,
    initialValues,
    list,
  };
};
