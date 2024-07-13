import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SelectList from '../screens/SelectList';
import CreateList from '../screens/CreateList';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{header: () => null}} component={Home} />
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
  );
};

export default BottomTabs;
