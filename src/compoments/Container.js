import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { hasNotch } from 'react-native-device-info'

const Container = (props) => {
    return (
        <View style={[styles.Container, props.style]}>
            {props.children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    Container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? hasNotch() ? 92 : 77 : 77
    }
})
