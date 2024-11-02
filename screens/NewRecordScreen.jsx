import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Inputs from '../components/NewRecord/Inputs'

export default function NewRecordScreen() {
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
        backgroundColor: '#0F1012',
    }
})