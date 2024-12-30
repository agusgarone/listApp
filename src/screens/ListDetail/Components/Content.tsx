import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import List from '../../../components/List';
import {IProduct} from '../../../models/product';
import RenderProduct from '../../AddProducts/components/RenderProducts';
import theme from '../../../common/theme';
import {listDetailController} from '../Controller/listDetailController';

const Content = ({id}: {id: string}) => {
  const {listSelected, getListByID} = listDetailController();

  useEffect(() => {
    getListByID(id);
  }, [id]);

  const _renderProducts = ({item}: {item: IProduct}) => {
    const isSelected = false;
    return (
      <RenderProduct item={item} isSelected={isSelected} onPress={() => null} />
    );
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.containerResult}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{listSelected?.name}</Text>
        </View>
        <View style={styles.containerList}>
          <List data={listSelected?.products || []} render={_renderProducts} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 20,
  },
  containerResult: {
    flex: 6,
    display: 'flex',
    paddingVertical: 10,
  },
  containerList: {
    flex: 4,
    display: 'flex',
  },
  containerTitle: {
    paddingVertical: 10,
  },
  title: {
    color: theme.colors.black,
    fontSize: theme.fontSize.xxl,
    fontWeight: '700',
  },
  containerButton: {
    flex: 1,
    display: 'flex',
    paddingTop: 12,
  },
});

export default Content;
