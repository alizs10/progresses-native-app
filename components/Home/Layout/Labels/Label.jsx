import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'

export default function Label({ name }) {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: Colors.gray700,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1
    },
    labelText: {
        fontSize: 12,
        color: 'white'
    }

})