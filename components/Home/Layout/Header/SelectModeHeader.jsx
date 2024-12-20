import { View, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppStore } from '../../../../store/app-store';
import { useDataStore } from '../../../../store/data-store';
import { useLabelStore } from '../../../../store/label-store';
import { useNavigation } from '@react-navigation/native';
import useSnackbar from '../../../../hooks/useSnackbar';

export default function SelectModeHeader() {

    const { selectedData, selectModeDataType, closeSelectMode, activeLabel, selectLabel } = useAppStore(state => state)
    const { data, groupPin, groupUnpin, groupTrash: groupDeleteData, groupDeleteDataLabel, undo: undoData } = useDataStore(state => state)
    const { labels, groupTrash: groupDeleteLabels, undo: undoLabels } = useLabelStore(state => state)

    let chosenData = selectModeDataType === 0 ? data : labels;
    const selectedDataList = chosenData.filter(d => selectedData.includes(d.id))
    const hasUnpinned = selectModeDataType === 0 && selectedDataList.some(sd => !sd.isPinned)

    const navigation = useNavigation()
    const createSnackbar = useSnackbar()

    function handleClose() {
        closeSelectMode()
    }

    function handlePinButton() {

        let action;
        let undoAction;

        if (hasUnpinned) {
            groupPin(selectedData)
            action = 'pinned'
            undoAction = 'unpinned'
        } else {
            groupUnpin(selectedData)
            action = 'unpinned'
            undoAction = 'pinned'
        }


        createSnackbar({
            text: `${selectedData.length} items ${action}`,
            action: {
                text: 'Undo',
                cb: undo.bind(null, undoAction)
            }
        })

        closeSelectMode()
    }

    function undo(action) {

        undoData()

        if (selectModeDataType === 1) {
            undoLabels()
        }

        createSnackbar({
            text: `${selectedData.length} items ${action}`,
            action: null
        })
    }

    function handleDeleteButton() {

        if (selectModeDataType === 0) {
            groupDeleteData(selectedData)
        } else {
            groupDeleteDataLabel(selectedData)

            if (selectedData.includes(activeLabel)) {
                selectLabel(0)
            }

            groupDeleteLabels(selectedData)
        }

        createSnackbar({
            text: `${selectedData.length} items moved to trash`,
            action: {
                text: 'Undo',
                cb: selectModeDataType === 0 ? undo.bind(null, 'restored') : undo.bind(null, 'restored'),
            }
        })
        closeSelectMode()
    }


    function handleEditButton() {

        if (selectedDataList.length > 1) return;
        let editable = selectedDataList[0]

        if (selectModeDataType === 0) {
            navigation.navigate('EditData', { data: editable })
        } else {
            navigation.navigate('EditLabel', { data: editable })
        }


        closeSelectMode()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.flexRow, { flex: 3 }]}>
                    <Pressable onPress={handleClose}>
                        <View style={styles.flexRow}>
                            <MaterialCommunityIcons name="close" size={24} color="white" />
                        </View>
                    </Pressable>
                    <Text style={styles.itemsCountText}>{selectedData.length}</Text>
                </View>

                <View style={[styles.flexRow, { flex: 1, justifyContent: 'flex-end' }]}>
                    {selectModeDataType === 0 && (
                        <Pressable onPress={handlePinButton}>
                            {/* <Feather name="pin" size={24} color={Colors.yellow200} /> */}
                            {hasUnpinned ? (
                                <MaterialCommunityIcons name="pin-outline" size={24} color="white" />
                            ) : (
                                <MaterialCommunityIcons name="pin" size={24} color="white" />
                            )}
                        </Pressable>
                    )}
                    {selectedData.length === 1 && (
                        <Pressable onPress={handleEditButton}>
                            <MaterialCommunityIcons name="pencil" size={24} color="white" />
                        </Pressable>
                    )}

                    <Pressable onPress={handleDeleteButton}>
                        <MaterialCommunityIcons name="trash-can" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 20,
        left: 20,
        height: 60,
        marginTop: 40,
        zIndex: 100,
    },
    header: {
        flex: 1,
        backgroundColor: Colors.gray900,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    itemsCountText: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: 'white'
    }
})