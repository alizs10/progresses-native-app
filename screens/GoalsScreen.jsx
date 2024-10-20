import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/GoalsAndRewards/Layout/Header/Header'
import BottomBar from '../components/GoalsAndRewards/Layout/BottomBar/BottomBar'
import Goals from '../components/GoalsAndRewards/Goals/Goals'
import Rewards from '../components/GoalsAndRewards/Rewards/Rewards'

export default function GoalsScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Goals />
            <Rewards />
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})