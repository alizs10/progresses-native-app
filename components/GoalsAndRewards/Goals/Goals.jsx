import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../Layout/Title'
import Goal from './Goal'

export default function Goals() {
    return (
        <View style={styles.container}>
            <Title title='Goals' count={7} />
            <Goal />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
})