import { View, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppStore } from '../../../../store/app-store';
import { useDataStore } from '../../../../store/data-store';
export default function SelectModeHeader() {

    const { selectedData, closeSelectMode } = useAppStore(state => state)
    const { data, groupPin, groupUnpin, groupDelete } = useDataStore(state => state)

    const selectedDataList = data.filter(d => selectedData.includes(d.id))
    const hasUnpinned = selectedDataList.some(sd => !sd.isPinned)

    function handleClose() {
        closeSelectMode()
    }

    function handlePinButton() {
        if (hasUnpinned) {
            groupPin(selectedData)
        } else {
            groupUnpin(selectedData)
        }
        closeSelectMode()
    }

    function handleDeleteButton() {

        groupDelete(selectedData)
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
                    <Pressable onPress={handlePinButton}>
                        {/* <Feather name="pin" size={24} color={Colors.yellow200} /> */}
                        {hasUnpinned ? (
                            <MaterialCommunityIcons name="pin-outline" size={24} color="white" />
                        ) : (
                            <MaterialCommunityIcons name="pin" size={24} color="white" />
                        )}
                    </Pressable>
                    {selectedData.length === 1 && (
                        <Pressable onPress={() => { }}>
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
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 12,
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