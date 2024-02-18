import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Layout/Header/Header'
import Progresses from '../components/Home/Progresses/Progresses'
import Labels from '../components/Home/Layout/Labels/Labels'
import BottomBar from '../components/Home/Layout/BottomBar/BottomBar'
import Menu from '../components/Home/Menu/Menu'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Labels />
            <Progresses />
            <BottomBar />
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})