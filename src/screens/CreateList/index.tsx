import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import theme from '../../common/theme';
import {IProduct} from '../../models/product';
import CreateListForm from '../../screens/CreateList/Components/Form';
import RenderProduct from '../../screens/CreateList/Components/RenderProducts';
import {Content} from './Components/Content';
import {createListController} from './Controller/createListController';

const CreateList = () => {
  const {handleFormikSubmit, initialValues, goToAddProducts, products} =
    createListController();
  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} onPress={() => null} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.content}>
        <CreateListForm
          handleFormikSubmit={handleFormikSubmit}
          initialValues={initialValues}
          children={
            <Content
              _renderProducts={_renderProducts}
              goToAddProducts={goToAddProducts}
              products={products}
            />
          }
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
