import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDataStore } from '../store/data-store'
import ProgressesTitle from '../components/Home/Progresses/ProgressesTitle'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Progress from '../components/Home/Progresses/Progress/Progress';
import MiniProgress from '../components/Home/Progresses/MiniProgress/MiniProgress';
import MiniRecord from '../components/Home/Progresses/MiniRecord/MiniRecord';
import MiniRecordManual from '../components/Home/Progresses/MiniRecordManual/MiniRecordManual';
import RecordManual from '../components/Home/Progresses/RecordManual/RecordManual';
import Record from '../components/Home/Progresses/Record/Record';
import { DataSelectModeProvider } from '../context/DataSelectModeContext';
import { useEffect, useLayoutEffect, useCallback, useState } from 'react';
import DeleteButton from '../components/Common/header/DeleteButton';
import RestoreButton from '../components/Common/header/RestoreButton';
import { useAppStore } from '../store/app-store';
import EmptyTrashButton from '../components/Common/header/EmptyTrashButton';
import { HeaderBackButton } from '@react-navigation/elements';
import useSnackbar from '../hooks/useSnackbar';
import DrawerHeader from '../components/Common/DrawerHeader';
import Colors from '../consts/Colors';

function Header({ onDelete, onRestore }) {

    return (
        <View style={styles.flexRow}>
            <DeleteButton onPress={onDelete} />
            <RestoreButton onPress={onRestore} />
        </View>
    )
}


export default function TrashcanScreen({ navigation }) {

    const initHeaderOptions = {
        title: '',
        headerRight: () => <Header />,
        headerLeft: null,
    }
    const [headerOptions, setHeaderOptions] = useState(initHeaderOptions)


    let { selectMode, selectedData, closeSelectMode } = useAppStore((state) => state)
    let { data, restoreData, groupDelete, undo: undoData } = useDataStore((state) => state)

    let deletedData = data.filter(d => d.deletedAt !== null)
    deletedData.sort((a, b) => new Date(b.deletedAt) - new Date(a.deletedAt));

    const createSnackbar = useSnackbar()

    function showDataComp(dataObj) {
        // 0 => progress
        // 1 => record
        // 2 => record manual
        // 3 => mini progress
        // 4 => mini record
        // 5 => mini record manual
        let comp;
        let dataViewMode = 0;
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

    function handleBackButton() {
        closeSelectMode()
        navigation.goBack()
    }

    function handleRestoreData() {
        restoreData(selectedData)
        closeSelectMode()

        createSnackbar({
            text: `${selectedData.length} items restored`,
            action: {
                text: 'Undo',
                cb: undo.bind(null, `${selectedData.length} items trashed`)
            }
        })
    }

    function handleEmptyTrash() {
        let deletedDataIds = deletedData.map(d => d.id)
        groupDelete(deletedDataIds)

        createSnackbar({
            text: `${deletedDataIds.length} items deleted`,
            action: {
                text: 'Undo',
                cb: undo.bind(null, `${deletedDataIds.length} items trashed`)
            }
        })
    }

    function undo(message) {
        undoData()

        createSnackbar({
            text: message,
            action: null
        })
    }

    function handleDeleteData() {
        groupDelete(selectedData)
        closeSelectMode()

        createSnackbar({
            text: `${selectedData.length} items deleted`,
            action: {
                text: 'Undo',
                cb: undo.bind(null, `${selectedData.length} items trashed`)
            }
        })
    }

    function handleCloseSelectMode() {
        closeSelectMode()
    }


    useEffect(() => {

        if (selectMode && selectedData.length > 0) {
            setHeaderOptions(prevState => ({ ...prevState, title: `${selectedData.length} items` }))
        } else {
            setHeaderOptions(prevState => ({ ...prevState, title: 'Trashcan' }))
        }

    }, [selectedData])

    function HeaderRight() {
        return selectMode ? (<Header onDelete={handleDeleteData} onRestore={handleRestoreData} />) : deletedData.length > 0 ? (<EmptyTrashButton onPress={handleEmptyTrash} />) : null
    }

    return (
        <DataSelectModeProvider>
            <View style={{ flex: 1 }}>

                <DrawerHeader
                    title={headerOptions.title}
                    headerLeftIcon={selectMode ? <MaterialCommunityIcons name="close" size={28} color="white" /> : null}
                    headerLeftPress={selectMode ? handleCloseSelectMode : null}
                    headerRight={HeaderRight}
                />

                <ScrollView style={styles.container}>

                    {deletedData.length === 0 && (
                        <View style={styles.emptyContainer}>
                            <MaterialCommunityIcons name="trash-can-outline" size={60} color={Colors.gray300} />
                            <Text style={styles.noTrashText}>No trashed data</Text>
                        </View>
                    )}

                    {deletedData.length > 0 && (
                        <SafeAreaView style={{ flex: 1, paddingBottom: 100 }}>
                            <ProgressesTitle title={"Trashed data"} count={deletedData.length} />
                            <FlatList data={deletedData} numColumns={1}
                                key={'deleted-data-flat-list'}
                                scrollEnabled={false}
                                // columnWrapperStyle={dataViewMode === 0 ? null : styles.progressesRowWrapper}
                                keyExtractor={(item => item.id)}
                                renderItem={({ index, item }) => showDataComp(item)}
                            />
                        </SafeAreaView>
                    )}

                </ScrollView>
            </View>
        </DataSelectModeProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#0F1012',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'column',
        gap: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'semibold',
        textAlign: 'justify',
        lineHeight: 28,
    },
    noTrashText: {
        color: Colors.gray300,
        fontSize: 18,
        fontWeight: 'semibold',
        textAlign: 'justify',
        lineHeight: 28,
        marginTop: 10
    },
    emptyContainer: {
        // flex: 1,
        height: 500,
        // backgroundColor: 'red',
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    flexRow: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
    }
})