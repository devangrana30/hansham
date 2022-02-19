import React from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const HeaderLeft = props => {
    return (
        <View style={[styles.headerLeft, props.style]}>{props.children}</View>
    );
};
export default HeaderLeft;

const styles = StyleSheet.create({
    headerLeft: {
        paddingLeft: wp(6),
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "20%",
        height: "100%",
        position: "absolute",
        left: 0
    }
});
