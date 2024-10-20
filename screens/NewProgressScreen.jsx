import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Inputs from '../components/NewProgress/Inputs'

export default function NewProgressScreen() {
    return (
        <View style={styles.container}>
            <Inputs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#343a40',
    }
})