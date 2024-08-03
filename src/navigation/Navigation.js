import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splash/SplashScreen';
import GoogleScreen from '../screens/google/GoogleScreen';
import Verification from '../screens/google/Verification';
import OTPVerificationScreen from '../screens/google/OTPVerificationScreen';
import SelectOrganizationScreen from '../screens/google/SelectOrganizationScreen';
import BottomTabNavigator from './BottomTabNavigator';
import EncryptedStorage from 'react-native-encrypted-storage';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const otp = await EncryptedStorage.getItem('otp');
        setIsAuthenticated(!!otp);
      } catch (error) {
        console.error('Failed to retrieve OTP:', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
           <> 
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="GoogleScreen" component={GoogleScreen} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
          </>
       ) : ( 
          <> 
            
            <Stack.Screen name="Main" component={BottomTabNavigator} />
            <Stack.Screen name="SelectOrganizationScreen" component={SelectOrganizationScreen} />
           </> 
         )} 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
