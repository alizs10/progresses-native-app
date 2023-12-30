import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header/Header'
import Progresses from '../components/Progresses/Progresses'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Progresses />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})