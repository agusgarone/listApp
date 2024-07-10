import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import List from '../components/List';
import FloatButton from '../components/FloatButton';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import {Products} from '../data-mock';

const CreateList = () => {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState<boolean>(false);

  const onPress = () => {
    console.log('onPress');
    setShow(true);
    setAnimation(true);
  };

  return (
    <SafeAreaView style={Style.screen}>
      <>
        <BottomSheet
          animation={animation}
          onDismiss={() => setShow(false)}
          show={show}
          setAnimation={setAnimation}
          key={'BottomSheet'}
        />
        <View style={Style.createList}>
          <Header
            center={<></>}
            left={<Text>Atras</Text>}
            right={<></>}
            key={'Header'}
          />
          <View style={Style.content}>
            <View style={Style.first}>
              <List data={Products} />
            </View>
            <View style={Style.second}>
              <FloatButton onPress={onPress} />
            </View>
          </View>
          <Button children="Listo" key={'Button'} />
        </View>
      </>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  createList: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  first: {
    flex: 5,
  },
  second: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default CreateList;
