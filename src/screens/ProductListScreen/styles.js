import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    gobacklogo: {
        height: wp(6), 
        width: wp(6), 
        resizeMode:'contain',
        tintColor:'#fff'
    },
    titleTxt: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: RFValue(24),
        marginLeft: wp(8),
        marginVertical: wp(2.5),
        color: '#fff'
    },
    mainView: {
        marginHorizontal: wp(5),
    },
    secondView: {
        // marginHorizontal: wp(12),
        paddingVertical: wp(6),
        backgroundColor:'#fff',
        borderRadius: 20,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    imageView: {
        height: wp(18),
        width: wp(18),
        borderRadius: 25,
        backgroundColor:'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
    },
    imageView1: {
        height: wp(16),
        width: wp(16),
        borderRadius: wp(9),
        // backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.27,
        // shadowRadius: 4.65,

        // elevation: 6,
    },
    nameTxt: {
        fontFamily: 'RobotoSlab-Regular',
        paddingHorizontal: wp(5),
        fontSize: RFValue(20)
    },
    arrowStyle: {
        height: wp(6),
        width: wp(6),
        resizeMode:'contain',
        tintColor: '#eb394e'
    },
    priceTxt: {
        fontFamily: 'RobotoSlab-Regular',
        fontSize: RFValue(14),
        color: 'gray'
    }
})