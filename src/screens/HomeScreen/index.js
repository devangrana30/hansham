import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, ImageBackground, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Container from '../../compoments/Container';
import { Header, HeaderLeft } from '../../compoments/Header';
import { styles } from './styles';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import adsId from '../../constant/adsId';
import MenuList from '../../compoments/MenuList';
import NativeAdView from "react-native-admob-native-ads";

const menuList = [
    { ads: true },
    { name: 'Manchurian', image: 'https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg', id: 1 },
    { name: 'Rice', image: 'https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg', id: 2 },
    { name: 'Bhel', image: 'https://browngirlmagazine.com/wp-content/uploads/2020/03/Add-Some-Color-to-Your-Menu-With-Chinese-Bhel-_7-scaled.jpg', id: 3 },
    { ads: true },
    { name: 'Paneer', image: 'https://cdn.squats.in/thumbnail/4B9F3B3A-8826-42EB-9FEC-B29FE23266EA_2020-03-27_15:01:26.jpeg', id: 4 },
    { name: 'Noodles', image: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg', id: 5 },
    { name: 'Soup', image: 'https://www.swatirecipe.com/wp-content/uploads/2018/04/manchow-soup-recipe.jpg', id: 6 },
    { ads: true },
]

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground resizeMode='stretch' source={require('../../assets/images/home_bg.png')} style={styles.container}>
            <Header>
                <HeaderLeft>
                    <TouchableOpacity onPress={() => { navigation.navigate('ContactScreen') }}>
                        <Image source={require('../../assets/images/menu.png')} style={styles.menuLogo} />
                    </TouchableOpacity>
                </HeaderLeft>
            </Header>
            <Container>
                <FlatList
                    data={menuList}
                    contentContainerStyle={{ paddingVertical: wp(8) }}
                    renderItem={({ item, index }) => (
                        item.ads ?
                            <NativeAdView
                                ref={nativeAdViewRef}
                                adUnitID="ca-app-pub-3940256099942544/2247696110"
                            >
                                <View>/* All other ad components */</View>
                            </NativeAdView> :
                            <MenuList
                                item={item}
                                index={index}
                            />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: wp(4) }} />
                    )}
                />
            </Container>
            <BannerAd
                size={BannerAdSize.BANNER}
                unitId={adsId.banner_ads_id}
            />
        </ImageBackground>
    )
}

export default HomeScreen;