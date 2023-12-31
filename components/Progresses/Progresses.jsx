import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProgressesTitle from './ProgressesTitle'
import Progress from './Progress/Progress'
import { Ionicons } from '@expo/vector-icons';

export default function Progresses() {
    return (
        <View style={styles.container}>


            <View style={styles.flexSpaceBetween}>
                <ProgressesTitle title={'All Progresses'} count={12} />
                <Ionicons name="grid-outline" size={16} color="white" />
            </View>

            <ScrollView style={styles.progressesContainer}>
                <Progress />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    progressesContainer: {
        paddingVertical: 8,
        gap: 8
    }
})