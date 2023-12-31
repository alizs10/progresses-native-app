import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header/Header'
import Progresses from '../components/Progresses/Progresses'
import Labels from '../components/Layout/Labels/Labels'
import BottomBar from '../components/Layout/BottomBar/BottomBar'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Labels />
            <Progresses />
            <BottomBar />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})