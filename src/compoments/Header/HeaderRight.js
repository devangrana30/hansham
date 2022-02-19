import React from "react";
import { View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const HeaderRight = props => {
    return (
        <View style={[styles.headerRight, props.style]}>{props.children}</View>
    );
};
export default HeaderRight;

const styles = StyleSheet.create({
    headerRight: {
        paddingRight: wp(5),
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "20%",
        height: "100%",
        position: "absolute",
        right: 0
    }
});
