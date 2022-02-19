import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react';
import { styles } from '../screens/HomeScreen/styles';
import { useInterstitialAd } from '@react-native-admob/admob';
import { useNavigation } from '@react-navigation/native';

const MenuList = ({ item, index }) => {
    const navigation = useNavigation();
    const { adLoaded, adDismissed, show } = useInterstitialAd(
        'ca-app-pub-8906065248414370/6829852834', {
            requestOptions: {
                requestNonPersonalizedAdsOnly: true,
            },
        }
    );

    useEffect(() => {
        if (adDismissed) {
            navigation.navigate('ProuctListScreen', { title: item.name, id: item.id })
        }
    }, [adDismissed, navigation]);

    return (
        <View style={styles.mainView}>
            <View style={styles.secondView}>
                <View style={styles.imageView}>
                    <Image source={{ uri: item.image }} style={styles.imageView} />
                </View>
                <View style={{ width: '75%' }}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        if (adLoaded) {
                            show()
                        } else {
                            navigation.navigate('ProuctListScreen', { title: item.name, id: item.id })
                        }
                    }}
                    style={styles.imageView1}>
                    <Image source={require('../assets/images/right_arrow.png')} style={styles.arrowStyle} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MenuList;
