import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gobacklogo: {
        height: wp(6),
        width: wp(6),
        resizeMode: 'contain',
        tintColor: '#fff'
    },
    titleTxt: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: RFValue(24),
        marginLeft: wp(8),
        marginVertical: wp(2.5),
        color: '#fff',
    },
    nameTxt: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: RFValue(18),
        marginLeft: wp(8),
        // marginVertical: wp(2.5),
        color: '#fff'
    },
})