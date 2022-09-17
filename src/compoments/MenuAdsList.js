import { TouchableOpacity, Image, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import NativeAdView, { HeadlineView, IconView, ImageView, TaglineView } from 'react-native-admob-native-ads';
import { styles } from '../screens/HomeScreen/styles';
import adsId from '../constant/adsId';
import { RFValue } from 'react-native-responsive-fontsize';

const MenuAdsList = () => {
    const nativeAdViewRef = useRef();

    useEffect(() => {
        nativeAdViewRef.current?.loadAd();
    }, []);

    return (
        <NativeAdView
            ref={nativeAdViewRef}
            adUnitID={adsId.native_ads_id}
        >
            <View style={styles.mainView}>
                <View style={styles.secondView}>
                    <View style={styles.imageView}>
                        <ImageView style={styles.imageView} />
                        {/* <IconView
                            style={styles.imageView}
                        /> */}
                        {/* <Image source={{ uri:'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'}} style={styles.imageView} /> */}
                    </View>
                    <View style={{ width: '75%' }}>
                        <HeadlineView
                            style={[styles.nameTxt, { fontSize: RFValue(16) }]}
                        />
                        <TaglineView
                            style={{
                                fontWeight: "bold",
                                fontSize: 12,
                                width: '80%',
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {

                        }}
                        style={styles.imageView1}>
                        <Image source={require('../assets/images/right_arrow.png')} style={styles.arrowStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </NativeAdView>
    )
}

export default MenuAdsList
