import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; 
import ScanScreen from '../screens/ScanScreen'; 
import SettingsScreen from '../screens/SettingsScreen'; 
import Home from '../assets/svg/Home.svg';
import Scan from '../assets/svg/Scan.svg';
import Setting from '../assets/svg/Setting.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarIconStyle: { width: 30, height: 30 }, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerShown:false,
          tabBarIcon: ({ size }) => <Home  width={'40'} height={'40'} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
            headerShown:false,
          tabBarIcon: ({ size }) => <Scan width={'40'} height={'40'} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
            headerShown:false,
          tabBarIcon: ({ size }) => <Setting  width={'30'} height={'40'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
