import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import ProductListScreen from './screens/ProductListScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
// import DrawerStack from './navigation/DrawerNavigation';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerScreen' screenOptions={{headerShown:false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="DrawerScreen" component={HomeScreen} />
                <Stack.Screen name="ProuctListScreen" component={ProductListScreen} />
                <Stack.Screen name="ContactScreen" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;