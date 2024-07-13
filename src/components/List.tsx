import React from 'react';
import {FlatList} from 'react-native';
import {IList} from '../models/list';
import {IProduct} from '../models/product';

const List = ({
  data,
  render,
}: {
  data: IProduct[] | IList[];
  render: ({item}: {item: any}) => React.JSX.Element;
}) => {
  return <FlatList data={data as any} renderItem={render} />;
};

export default List;
