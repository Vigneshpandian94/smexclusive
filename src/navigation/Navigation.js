import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splash/SplashScreen';
import GoogleScreen from '../screens/google/GoogleScreen';
import Verification from '../screens/google/Verification';
import OTPVerificationScreen from '../screens/google/OTPVerificationScreen';
import SelectOrganizationScreen from '../screens/google/SelectOrganizationScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="GoogleScreen" component={GoogleScreen} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
        <Stack.Screen name="SelectOrganizationScreen" component={SelectOrganizationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
