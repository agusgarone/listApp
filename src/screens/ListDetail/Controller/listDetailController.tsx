import {useContext, useState} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {IList} from '../../../models/list';
import {StorageService} from '../../../storage/asyncStorage';
import {Alert} from 'react-native';
import {RemoveList} from '../../../services/List';

export const listDetailController = () => {
  const [listSelected, setListSelected] = useState<IList | null>(null);
  const navigation = useContext(NavigationContext);

  const getListByID = async (id: string) => {
    await StorageService.getItem('lists').then((res: IList[]) => {
      const listFound = res.find(list => list.id.toString() === id);
      if (listFound) {
        setListSelected(listFound);
      } else {
        Alert.alert('¡Esta lista no existe!');
        goHome();
      }
    });
  };

  const DialogDeleteList = (list: IList) =>
    Alert.alert(
      `¡Atención!`,
      `Va a eliminar la lista con nombre: ${list.name}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            RemoveList(list);
            navigation?.navigate('MainTabs', {screen: 'Home'});
          },
        },
      ],
    );

  const handleDeleteList = (list: IList) => DialogDeleteList(list);

  const goHome = () => navigation?.navigate('Home');

  const goBack = () => navigation?.goBack();

  return {
    listSelected,
    getListByID,
    goBack,
    handleDeleteList,
  };
};
