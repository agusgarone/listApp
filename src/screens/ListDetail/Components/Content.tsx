import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import List from '../../../components/List';
import {IProduct} from '../../../models/product';
import RenderProduct from '../../AddProducts/components/RenderProducts';
import theme from '../../../common/theme';
import {listDetailController} from '../Controller/listDetailController';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const Content = ({id}: {id: string}) => {
  const {listSelected, getListByID, handleDeleteList} = listDetailController();

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
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.grey,
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 8,
            }}
            onPress={() => listSelected && handleDeleteList(listSelected)}>
            <Icon
              name="trash"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.white}
              onPress={() => listSelected && handleDeleteList(listSelected)}
            />
          </TouchableOpacity>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
