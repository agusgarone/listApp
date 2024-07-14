import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import List from '../../components/List';
import RenderList from './Components/RenderList';
import {IList} from '../../models/list';
import {NavigationContext} from '@react-navigation/native';
import StorageService from '../../services/asyncStorage';

const Home = () => {
  const [list, setList] = useState<IList[]>([]);
  const navigation = React.useContext(NavigationContext);

  navigation?.addListener('focus', () => {
    StorageService.getItem('lists').then(res => {
      setList(res);
    });
  });

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
          <List data={list} render={_renderList} />
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
