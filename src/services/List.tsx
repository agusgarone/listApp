import {IList} from '../models/list';
import {StorageService} from '../storage/asyncStorage';

export const CreateList = (list: IList) => {
  StorageService.getItem('lists').then((response: IList[]) => {
    const lists = response;
    if (lists) {
      const listExist = lists.find(value => value.name === list.name);
      if (listExist) {
        console.log('La lista ya existe');
      } else {
        const listsArray = [...lists, list];
        StorageService.setItem('lists', listsArray);
      }
    } else {
      StorageService.setItem('lists', [list]);
    }
  });
};

export const RemoveList = (list: IList) => {
  StorageService.getItem('lists').then((response: IList[]) => {
    const lists = response;
    const listsArray = lists.filter(value => value.name !== list.name);
    StorageService.setItem('lists', listsArray);
  });
};

export const EditList = (list: IList) => {
  StorageService.getItem('lists').then((response: IList[]) => {
    const lists = response;
    const listsArray = lists.map(value => {
      if (value.id === list.id) {
        return list;
      }
      return value;
    });
    StorageService.setItem('lists', listsArray);
  });
};
