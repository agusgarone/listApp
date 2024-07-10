import {IList} from '../models/list';
import StorageService from './asyncStorage';

export const CreateList = (list: IList) => {
  StorageService.getItem('lists').then((response: IList[]) => {
    const lists = response;
    const listExist = lists.find(value => value.name === list.name);
    if (listExist) {
      console.log('La lista ya existe');
    } else {
      const listsArray = [...lists, list];
      StorageService.setItem('lists', listsArray);
    }
  });
};

export const RemoveList = (list: IList) => {
  StorageService.getItem('lists').then((response: IList[]) => {
    const lists = response;
    const listsArray = lists.filter(value => value.name === list.name);
    StorageService.setItem('lists', listsArray);
  });
};
