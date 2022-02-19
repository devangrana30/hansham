import React from "react";
import { Platform, View, ViewPropTypes, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Header = props => {
    return (
        <View style={[styles.header, props.headerStyle]}>
            {!props.isTop ? <View style={styles.statusBar} /> : null}
            <View
                ref={c => (_root = c)}
                {...props}
                style={[styles.headerBox, props.style]}
            />
        </View>
    );
};

export default Header;
Header.propTypes = {
    ...ViewPropTypes,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ])
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: '#00000000',
        // ...Platform.select({
        //     ios: {
        //         shadowColor: "rgba(0,0,0, 0.5)",
        //         shadowOffset: {
        //             height: 1 ,
        //             width: 0
        //         },
        //         shadowOpacity: 0.7 
        //     },
        //     android: {
        //         elevation: 10
        //     }
        // }),
        position: "absolute",
        top: 0,
        zIndex: 99999
    },
    headerBox: {
        flexDirection: "row",
        width: "100%",
        height: 70,
    },
    statusBar: {
        width: "100%",
        height: Platform.OS === 'ios' ? 37 : 22,
    }
});
