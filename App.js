import React, { useEffect } from 'react';
import AppNavigator from './src/AppNavigation';
import { StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const App = () => { 

    useEffect(() => {
        SplashScreen.hide()
    }, [])
    
    return (
        <View style={{flex:1}}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <AppNavigator/>
        </View>
    );
};

export default App;
