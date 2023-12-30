import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProgressesTitle from './ProgressesTitle'
import Progress from './Progress/Progress'

export default function Progresses() {
    return (
        <View style={styles.container}>
            <ProgressesTitle title={'All Progresses'} count={12} />

            <ScrollView style={styles.progressesContainer}>
                <Progress />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    progressesContainer: {
        paddingVertical: 10,
        gap: 8
    }
})