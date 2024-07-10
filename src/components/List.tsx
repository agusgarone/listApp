import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import RenderItem from './RenderItem';
import theme from '../common/theme';
import {IList} from '../models/list';
import {IProduct} from '../models/product';

const List = ({data}: {data: IProduct[] | IList[]}) => {
  return (
    <FlatList
      data={data as any}
      style={style.list}
      renderItem={({item}) => {
        return <RenderItem item={item} type="remove" key={'RenderItem'} />;
      }}
    />
  );
};

const style = StyleSheet.create({
  list: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 8,
  },
});

export default List;
