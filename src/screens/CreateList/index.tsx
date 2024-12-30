import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import theme from '../../common/theme';
import {IProduct} from '../../models/product';
import CreateListForm from '../../screens/CreateList/Components/Form';
import RenderProduct from '../../screens/CreateList/Components/RenderProducts';
import {Content} from './Components/Content';

const CreateList = () => {
  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} onPress={() => null} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.content}>
        <CreateListForm
          children={<Content _renderProducts={_renderProducts} />}
        />
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 32,
    display: 'flex',
    flex: 1,
  },
  text: {
    color: theme.colors.grey,
  },
});

export default CreateList;
