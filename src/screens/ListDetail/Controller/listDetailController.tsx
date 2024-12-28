import {useContext, useState} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {IList} from '../../../models/list';
import {StorageService} from '../../../storage/asyncStorage';

export const listDetailController = () => {
  const [listSelected, setListSelected] = useState<IList | null>(null);
  const navigation = useContext(NavigationContext);

  const getListByID = async (id: string) => {
    await StorageService.getItem('lists').then((res: IList[]) => {
      const listFound = res.find(list => list.id.toString() === id);
      if (listFound) {
        setListSelected(listFound);
      }
    });
  };

  const goHome = () => navigation?.navigate('Home');

  const goBack = () => navigation?.goBack();

  return {
    listSelected,
    getListByID,
    goHome,
    goBack,
  };
};
