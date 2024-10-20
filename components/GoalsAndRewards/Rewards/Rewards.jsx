import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../Layout/Title'
import Reward from './Reward'

export default function Rewards() {
    return (
        <View style={styles.container}>
            <Title title='Rewards' count={5} />
            <Reward />
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