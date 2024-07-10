import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.home}>
        <Header
          center={<Text>ShopListApp</Text>}
          left={<></>}
          right={<></>}
          key={'Header'}
        />
        <Text>Home screen</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Home;
