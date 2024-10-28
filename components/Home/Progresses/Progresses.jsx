import { View, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProgressesTitle from './ProgressesTitle'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Progress from './Progress/Progress'
import MiniProgress from './MiniProgress/MiniProgress';
import Record from './Record/Record';
import MiniRecord from './MiniRecord/MiniRecord';
import RecordManual from './RecordManual/RecordManual';
import MiniRecordManual from './MiniRecordManual/MiniRecordManual';

import { useProgressStore } from '../../../store/progress-store'

export default function Progresses() {

    // 0 -> List, 1-> Grid
    const [dataViewMode, setDataViewMode] = useState(0)

    function toggleDataViewMode() {
        setDataViewMode(prevState => prevState === 0 ? 1 : 0)
    }

    const progresses = useProgressStore((state) => state.progresses)
    progresses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const fakeData = [
        {
            title: 'Test one',
            theme: "white",
            type: 0
        },
        {
            title: 'Test two',
            theme: "red",
            type: 1
        },
        {
            title: 'Test three',
            theme: "turquoise",
            type: 2
        },
        {
            title: 'Test four',
            theme: "blue",
            type: 1
        },
        {
            title: 'Test five',
            theme: "violet",
            type: 1

        },
        {
            title: 'Test six',
            theme: "yellow",
            type: 1
        },

    ]

    function showDataComp(data) {
        // 0 => progress
        // 1 => record
        // 2 => record manual
        // 3 => mini progress
        // 4 => mini record
        // 5 => mini record manual
        let comp;

        switch (data.type) {
            case 0:
                comp = dataViewMode === 0 ? <Progress data={data} /> : <MiniProgress data={data} />
                break;

            case 1:
                comp = dataViewMode === 0 ? <Record data={data} /> : <MiniRecord data={data} />
                break;

            case 2:
                comp = dataViewMode === 0 ? <RecordManual data={data} /> : <MiniRecordManual data={data} />
                break;

            default:
                comp = dataViewMode === 0 ? <Progress data={data} /> : <MiniProgress data={data} />
                break;
        }

        return comp;
    }

    return (
        <View style={styles.container}>


            <View style={[styles.flexSpaceBetween, { marginBottom: 12 }]}>
                <ProgressesTitle title={"All"} count={3} />
                <Pressable onPress={toggleDataViewMode}>
                    <View style={{ padding: 5 }}>

                        {dataViewMode === 0 ? (
                            <Ionicons name="grid-outline" size={18} color="white" />
                        ) : (
                            <MaterialCommunityIcons name="view-agenda-outline" size={18} color="white" />
                        )}
                    </View>
                </Pressable>
            </View>

            <FlatList data={progresses} numColumns={dataViewMode === 0 ? 1 : 2}
                key={dataViewMode === 0 ? 1 : 2}
                columnWrapperStyle={dataViewMode === 0 ? null : styles.progressesRowWrapper}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item => item.id)}
                renderItem={({ index, item }) => showDataComp(item)}
            />




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
        gap: 8,
    }
})