import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
            <Text style={{fontSize:18, color: 'white', fontWeight:'bold'}}>Submit</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 10,
        paddingVertical:8,
        backgroundColor:'blue',
        marginVertical: 10
    }
})
