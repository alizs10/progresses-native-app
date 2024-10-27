import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '../../consts/Colors';

export default function CloseButton({ onPress, color = Colors.red500, size = 20 }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Feather name="x" size={size} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }

})