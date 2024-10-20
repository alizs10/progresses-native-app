import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../consts/Colors'

export default function Button({ text, icon = null, bgColor = Colors.green600, textColor = 'white', textSize = 20, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                {icon && icon}
                <Text style={[styles.text, { color: textColor, fontSize: textSize }]}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 18,
        backgroundColor: Colors.green600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 4,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
})