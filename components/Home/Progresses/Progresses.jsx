import { View, StyleSheet, FlatList, Pressable, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProgressesTitle from './ProgressesTitle'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Progress from './Progress/Progress'
import MiniProgress from './MiniProgress/MiniProgress';
import Record from './Record/Record';
import MiniRecord from './MiniRecord/MiniRecord';
import RecordManual from './RecordManual/RecordManual';
import MiniRecordManual from './MiniRecordManual/MiniRecordManual';

import { useDataStore } from '../../../store/data-store';
import { useAppStore } from '../../../store/app-store';
import { useNavigationState } from '@react-navigation/native';
import { isProgressCompleted } from '../../../helpers/data-helper';

export default function Progresses() {

    const routeIndex = useNavigationState(state => state.index);
    const routeNames = useNavigationState(state => state.routeNames);
    const currentRouteName = routeNames[routeIndex];

    // 0 -> List, 1-> Grid
    const [dataViewMode, setDataViewMode] = useState(0)

    function toggleDataViewMode() {
        setDataViewMode(prevState => prevState === 0 ? 1 : 0)
    }

    let { activeLabel, searchMode } = useAppStore((state) => state)

    let { data, searchResults } = useDataStore((state) => state)

    let showData = searchMode ? searchResults : data;

    showData = showData.filter(prg => (prg.deletedAt === null && prg.label === activeLabel))

    if (currentRouteName === 'FinishedProgresses') {
        showData = showData.filter(d => d.type === 0 && isProgressCompleted(d))
    }
    if (currentRouteName === 'UnfinishedProgresses') {
        showData = showData.filter(d => d.type === 0 && !isProgressCompleted(d))
    }
    if (currentRouteName === 'Records') {
        showData = showData.filter(d => [1, 2].includes(d.type))
    }

    let pinnedData = showData.filter(d => d.isPinned)
    let otherData = showData.filter(d => !d.isPinned)
    pinnedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    otherData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


    function showDataComp(dataObj) {
        // 0 => progress
        // 1 => record
        // 2 => record manual
        // 3 => mini progress
        // 4 => mini record
        // 5 => mini record manual
        let comp;

        switch (dataObj.type) {
            case 0:
                comp = dataViewMode === 0 ? <Progress data={dataObj} /> : <MiniProgress data={dataObj} />
                break;

            case 1:
                comp = dataViewMode === 0 ? <Record data={dataObj} /> : <MiniRecord data={dataObj} />
                break;

            case 2:
                comp = dataViewMode === 0 ? <RecordManual data={dataObj} /> : <MiniRecordManual data={dataObj} />
                break;

            default:
                comp = dataViewMode === 0 ? <Progress data={dataObj} /> : <MiniProgress data={dataObj} />
                break;
        }

        return comp;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.flexSpaceBetween, { marginBottom: 12 }]}>
                <ProgressesTitle title={"All"} count={data.length} />
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

            {pinnedData.length > 0 && (
                <SafeAreaView style={{ flex: 1 }}>
                    <ProgressesTitle title={"Pinned"} count={pinnedData.length} />
                    <FlatList data={pinnedData} numColumns={dataViewMode === 0 ? 1 : 2}
                        key={'pinned-data-flat-list' + dataViewMode}
                        scrollEnabled={false}
                        columnWrapperStyle={dataViewMode === 0 ? null : styles.progressesRowWrapper}
                        keyExtractor={(item => item.id)}
                        renderItem={({ index, item }) => showDataComp(item)}
                    />
                </SafeAreaView>
            )}

            {otherData.length > 0 && (
                <SafeAreaView style={{ flex: 1 }}>
                    <ProgressesTitle title={"Other"} count={otherData.length} />
                    <FlatList data={otherData} numColumns={dataViewMode === 0 ? 1 : 2}
                        key={'other-data-flat-list' + dataViewMode}
                        scrollEnabled={false}
                        columnWrapperStyle={dataViewMode === 0 ? null : styles.progressesRowWrapper}
                        keyExtractor={(item => item.id)}
                        renderItem={({ index, item }) => showDataComp(item)}
                    />
                </SafeAreaView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        paddingBottom: 200
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