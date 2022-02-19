import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

const MenuScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'#eb394e', paddingTop: wp(15)}}>
            <TouchableOpacity style={{marginHorizontal: wp(5), backgroundColor:'#fff', borderRadius: 10, alignItems:'center', justifyContent:'center'}}>
                <Text style={{paddingVertical: wp(4), fontFamily:'RobotoSlab-Bold', fontSize:RFValue(18)}}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuScreen;
