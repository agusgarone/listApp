import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/services/BottomTabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomTabs />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
