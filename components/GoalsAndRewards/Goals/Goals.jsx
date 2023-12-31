import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../Layout/Title'

export default function Goals() {
    return (
        <View style={styles.container}>
            <Title title='Goals' count={7} />
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