import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import ListDetail from '../screens/ListDetail';
import AddProducts from '../screens/AddProducts';
import CreateProduct from '../screens/CreateProduct';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* Tab Navigator como pantalla principal */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{headerShown: false}} // Oculta el header para el Tab Navigator
      />
      {/* Pantallas adicionales */}
      <Stack.Screen
        name="ListDetail"
        component={ListDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddProducts"
        component={AddProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
