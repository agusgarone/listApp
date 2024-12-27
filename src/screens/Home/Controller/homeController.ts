import {useContext, useState} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {IList} from '../../../models/list';
import {StorageService} from '../../../storage/asyncStorage';

export const homeController = () => {
  const [list, setList] = useState<IList[]>([]);
  const navigation = useContext(NavigationContext);

  navigation?.addListener('focus', () => {
    StorageService.getItem('lists').then(res => {
      setList(res);
    });
  });

  return {
    list,
  };
};
