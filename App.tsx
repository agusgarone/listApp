import React from 'react';
import Home from './src/screens/Home';
import SelectList from './src/screens/SelectList';
import CreateList from './src/screens/CreateList';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={{header: () => null}}
            component={Home}
          />
          <Tab.Screen
            name="SelectList"
            options={{header: () => null}}
            component={SelectList}
          />
          <Tab.Screen
            name="CreateList"
            options={{header: () => null}}
            component={CreateList}
          />
        </Tab.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
