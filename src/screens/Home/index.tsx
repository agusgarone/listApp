import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import List from '../../components/List';
import {Lists} from '../../data-mock';
import RenderList from './Components/RenderList';
import {IList} from '../../models/list';

const Home = () => {
  const _renderList = ({item}: {item: IList}) => {
    return <RenderList item={item} />;
  };

  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.home}>
        <Header
          center={<Text>ShopListApp</Text>}
          left={<></>}
          right={<></>}
          key={'Header'}
        />
        <View style={Style.content}>
          <List data={Lists} render={_renderList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  home: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
});

export default Home;
