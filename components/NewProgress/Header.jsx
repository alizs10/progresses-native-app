import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color="white" />
            <Text style={styles.title}>New Progress</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title: {
        color: 'white',
        fontSize: 18
    }
})