import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appColor, whiteColor} from '../theme/appTheme';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Users'}
        screenOptions={{
          headerStyle: {
            backgroundColor: appColor,
            height: 10,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: whiteColor,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTintColor: whiteColor,
        }}>
        <Stack.Screen name="Users" component={UserListScreen} />
        <Stack.Screen name="User Detail" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
