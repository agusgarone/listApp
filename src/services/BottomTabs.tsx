import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SelectList from '../screens/SelectList';
import CreateList from '../screens/CreateList';
import AddProducts from '../screens/AddProducts';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import theme from '../common/theme';
import ListDetail from '../screens/ListDetail';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          header: () => null,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.grey}
              onPress={() => {}}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="ListDetail"
        options={{header: () => null}}
        component={ListDetail}
      />
      <Tab.Screen
        name="CreateList"
        options={{
          header: () => null,
          tabBarLabel: 'Create list',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="plus"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.grey}
              onPress={() => {}}
            />
          ),
        }}
        component={CreateList}
      />
      <Tab.Screen
        name="AddProducts"
        options={{
          header: () => null,
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="list"
              type={IconType.FontAwesome}
              size={25}
              color={theme.colors.grey}
              onPress={() => {}}
            />
          ),
        }}
        component={AddProducts}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
