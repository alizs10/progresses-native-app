import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProgressesTitle from './ProgressesTitle'
import Progress from './Progress/Progress'
import { Ionicons } from '@expo/vector-icons';
import Record from './Record/Record';
import RecordManual from './RecordManual/RecordManual';
import MiniProgress from './MiniProgress/MiniProgress';
import MiniRecord from './MiniRecord/MiniRecord';
import MiniRecordManual from './MiniRecordManual/MiniRecordManual';

export default function Progresses() {
    return (
        <View style={styles.container}>


            <View style={styles.flexSpaceBetween}>
                <ProgressesTitle title={'All'} count={3} />
                <Ionicons name="grid-outline" size={18} color="white" />
            </View>

            <ScrollView>
                <View style={styles.progressesContainer}>
                    <MiniRecordManual />
                    <MiniRecordManual />
                </View>
                {/* <Progress />
                <Record />
                <RecordManual /> */}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    progressesContainer: {
        gap: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 12
    }
})