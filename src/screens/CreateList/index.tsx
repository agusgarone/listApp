import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import theme from '../../common/theme';

import Header from '../../components/Header';
import {IProduct} from '../../models/product';
import CreateListForm from '../../screens/CreateList/Components/Form';
import RenderProduct from '../../screens/CreateList/Components/RenderProducts';
import {Content} from './Components/Content';
import {createListController} from './Controller/createListController';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const CreateList = () => {
  const {goBack} = createListController();
  const _renderProducts = ({item}: {item: IProduct}) => {
    return <RenderProduct item={item} onPress={() => null} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <Header
        center={<></>}
        left={
          <TouchableOpacity onPress={goBack}>
            <Icon
              name="arrow-left"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.grey}
              onPress={() => {}}
            />
          </TouchableOpacity>
        }
        right={<></>}
        key={'Header'}
      />
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
    display: 'flex',
    flex: 1,
  },
  text: {
    color: theme.colors.grey,
  },
});

export default CreateList;
