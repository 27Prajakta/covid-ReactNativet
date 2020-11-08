import React from 'react';
import {LandingScreen} from './LandingScreen';
import {Home} from './Home';
import {CovidInfo} from './CovidInfo';
import {StateInfo} from './StateInfo';
import {Login} from './Login';
import CustomSidebarMenu from '../components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Draw = createDrawerNavigator();

const Drawer = () => {
    return (
        <Draw.Navigator screenOptions={{
          headerShown: false
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Draw.Screen name="Home" component={Home} />
          <Draw.Screen name="Safety Measures" component={CovidInfo} />
        </Draw.Navigator>
    );
  };

export {
    LandingScreen,
    Login,
    Home,
    CovidInfo,
    StateInfo,
    Drawer
}
