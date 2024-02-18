import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/NewRecord/Header'
import Button from '../components/Common/Button'
import Inputs from '../components/NewRecord/Inputs'

export default function NewRecordScreen() {
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