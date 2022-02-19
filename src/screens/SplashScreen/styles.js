import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eb394e'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode:'contain'
    },
    logoTitle: {
        color: '#fff',
        fontWeight: '500',
        fontSize: RFValue(22),
        fontFamily: 'RobotoSlab-Bold'
    }
})