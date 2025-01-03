import {useContext, useState} from 'react';
import {NavigationContext} from '@react-navigation/native';
import {IList} from '../../../models/list';
import {StorageService} from '../../../storage/asyncStorage';

export const homeController = () => {
  const [list, setList] = useState<IList[]>([]);
  const navigation = useContext(NavigationContext);

  const navigateToListDetail = (id: string) => {
    navigation?.navigate('ListDetail', {id: id});
  };

  const navigateToEditList = (id: string) => {
    navigation?.navigate('MainTabs', {screen: 'CreateList', params: {id: id}});
  };

  navigation?.addListener('focus', () => {
    StorageService.getItem('lists').then(res => {
      setList(res);
    });
  });

  return {
    list,
    navigateToListDetail,
    navigateToEditList,
  };
};
