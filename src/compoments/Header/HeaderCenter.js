import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const HeaderCenter = ({children, style, disableTextChildren, textstyle}) => {
    return (
        <View style={[styles.headerTitle, style]}>
        {!disableTextChildren && <Text numberOfLines={1} style={[styles.headerTitleText, textstyle]}>
            {children}
        </Text>}
        {disableTextChildren && <View>
            {children}
        </View>}
    </View>
    );
};
export default HeaderCenter;

const styles = StyleSheet.create({
    headerTitle:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '62%',
        height:'100%',
        position: 'absolute',
        left: '20%'
    },
    headerTitleText:{
        fontSize: 22,
        fontWeight: '500',
       // color: COLOR.PRIMARY_COLOR
    },
});