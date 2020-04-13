import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Podcast from './pages/Podcast';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Podcast" component={Podcast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
