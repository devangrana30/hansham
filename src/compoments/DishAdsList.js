import { View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import NativeAdView, { HeadlineView, ImageView, TaglineView } from 'react-native-admob-native-ads';
import { styles } from '../screens/ProductListScreen/styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import adsId from '../constant/adsId';

const DishAdsList = () => {
    const nativeAdViewRef = useRef();

    useEffect(() => {
        nativeAdViewRef.current?.loadAd();
    }, []);

    return (
        <NativeAdView
            ref={nativeAdViewRef}
            adUnitID={adsId.native_ads_id}
        >
            <View style={[styles.mainView, { flexDirection: 'row' }]}>
                <View style={styles.secondView}>
                    {/* <IconView
                        style={styles.imageView}
                    /> */}
                    <ImageView style={styles.imageView} />
                    <View style={{ width: '70%' }}>
                        <HeadlineView
                            style={[styles.nameTxt, { fontSize: RFValue(14) }]}
                        />
                        <TaglineView
                            style={{
                                fontWeight: "bold",
                                fontSize: 12,
                                width: '80%',
                                alignSelf: 'center'
                            }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5), justifyContent: 'space-between', paddingTop: wp(1.5) }}>
                            {/* <Text style={styles.priceTxt}>Half: <Text style={{ color: '#eb394e', fontFamily: 'RobotoSlab-Medium' }}>{item.half}</Text></Text>
                            <Text style={styles.priceTxt}>Full: <Text style={{ color: '#eb394e', fontFamily: 'RobotoSlab-Medium' }}>{item.full}</Text></Text> */}
                        </View>
                    </View>
                </View>
            </View>
        </NativeAdView>
    )
}

export default DishAdsList;