import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const SplashScreen = () => {
    const navigation = useNavigation();
    
    useEffect(()=> {
        // setTimeout(()=> {
        //     navigation.navigate('DrawerScreen')
        // }, 5000)
    }, [])
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/hansam_logo_transparent.png')} style={styles.logo}/>
            <Text style={styles.logoTitle}>Hansham Chinese</Text>
            {/* <Image source={require('../../assets/images/noodles.png')} style={{height: 50, width: 50, resizeMode:'contain'}}/> */}
        </View>
    )
}

export default SplashScreen;
