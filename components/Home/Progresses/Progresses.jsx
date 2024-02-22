import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ProgressesTitle from './ProgressesTitle'
import Progress from './Progress/Progress'
import { Ionicons } from '@expo/vector-icons';
import Record from './Record/Record';
import RecordManual from './RecordManual/RecordManual';
import MiniProgress from './MiniProgress/MiniProgress';
import MiniRecord from './MiniRecord/MiniRecord';
import MiniRecordManual from './MiniRecordManual/MiniRecordManual';
import Colors from '../../../consts/Colors';

export default function Progresses() {




    const fakeData = [
        {
            title: 'Test one',
            theme: "white"
        },
        {
            title: 'Test two',
            theme: "red"
        },
        {
            title: 'Test three',
            theme: "turquoise"
        },
        {
            title: 'Test four',
            theme: "blue"
        },
        {
            title: 'Test five',
            theme: "violet"
        },
        {
            title: 'Test six',
            theme: "yellow"
        },

    ]

    return (
        <View style={styles.container}>


            <View style={styles.flexSpaceBetween}>
                <ProgressesTitle title={'All'} count={3} />
                <Ionicons name="grid-outline" size={18} color="white" />
            </View>


            <FlatList data={fakeData} numColumns={2}
                columnWrapperStyle={styles.progressesRowWrapper}
                style={{ flex: 1 }}
                keyExtractor={(item => item.title)}
                renderItem={({ index, item }) => <MiniRecordManual theme={item.theme} />}
            ></FlatList>

            {/* <FlatList data={fakeData} numColumns={1}
                keyExtractor={(item => item.title)}
                renderItem={({ index, item }) => <RecordManual theme={item.theme} />}
            ></FlatList> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    progressesRowWrapper: {
        gap: 8

    }
})