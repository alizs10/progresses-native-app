import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/NewProgress/Header'
import Button from '../components/Common/Button'
import Inputs from '../components/NewProgress/Inputs'

export default function NewProgressScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <Inputs />
            <Button text={'Create'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
    }
})