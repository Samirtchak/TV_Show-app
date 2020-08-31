import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import Show from './Screen/Show';
import Details from './Screen/Details';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name = "Home"
              component={Home}
              options={{title:'Home'}}
            />

        <Stack.Screen
              name = "Series"
              component={Show}
              options={{title:'Shows'}}
            />

        <Stack.Screen
              name = "Details"
              component={Details}
              options={{title:'Details'}}
            />
        </Stack.Navigator>

    </NavigationContainer>
 
  
  );
}


