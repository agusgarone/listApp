import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const SelectList = () => {
  return (
    <SafeAreaView style={Style.screen}>
      <View style={Style.selectList}>
        <Header
          center={<></>}
          left={<Text>Atras</Text>}
          right={<></>}
          key={'Header'}
        />
        <View style={Style.content}>
          <Text>Select list screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  selectList: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
});

export default SelectList;
