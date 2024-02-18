import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../consts/Colors'

export default function Button({ text, bgColor = Colors.green600, textColor = 'white' }) {
    return (
        <Pressable>
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 18,
        backgroundColor: Colors.green600,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})