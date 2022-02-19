import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, Linking } from 'react-native'
import React from 'react'
import { Header, HeaderLeft } from '../../compoments/Header';
import { styles } from './styles';
import Container from '../../compoments/Container';
import { RFValue } from 'react-native-responsive-fontsize';
import HeaderCenter from '../../compoments/Header/HeaderCenter';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';
import adsId from '../../constant/adsId';

const ContactScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground resizeMode='stretch' source={require('../../assets/images/bg_contact.png')} style={styles.container}>
            <Header>
                <HeaderLeft>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/goback_icon.png')} style={styles.gobacklogo} />
                    </TouchableOpacity>
                </HeaderLeft>
                <HeaderCenter>
                    <Text style={styles.titleTxt}>{`Contact Us`}</Text>
                </HeaderCenter>
            </Header>
            <Container>
                {/* <Text style={styles.titleTxt}>{`Contact Us`}</Text> */}
                <Text style={[styles.nameTxt, { marginTop: wp(5) }]}>Sagar Jariwala</Text>
                {/* <TouchableOpacity> */}
                <Text onPress={() => Linking.openURL('tel:${+917984569278}')} style={[styles.nameTxt, { color: '#6b32a8', fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }]}>+917984569278</Text>
                {/* </TouchableOpacity> */}
                <Text style={[styles.nameTxt, { marginTop: 10 }]}>Mohil Jariwala</Text>
                <Text onPress={() => Linking.openURL('tel:${+918320609379}')} style={[styles.nameTxt, { color: '#6b32a8', fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }]}>+918320609379</Text>
                <Text style={[styles.titleTxt, { fontSize: RFValue(22), fontWeight: 'bold' }]}>Home Address : -</Text>
                <Text style={styles.nameTxt}>{`25, Jaganath Soc., Nr. Shastri-\nnagar, Khatodra, \nSurat-395002.`}</Text>
                <Text style={[styles.titleTxt, { fontSize: RFValue(22), fontWeight: 'bold' }]}>Shop Address : -</Text>
                <Text style={styles.nameTxt}>{`Rokadiya Hanuman Mandir, \nNr. Kharwar Nagar BRTS, \nSurat-395002.`}</Text>
            </Container>
            <BannerAd
                size={BannerAdSize.BANNER}
                unitId={adsId.banner_ads_id}
            />
        </ImageBackground>
    )
}

export default ContactScreen;