import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { useAppStore } from '../../../../store/app-store'

export default function Label({ labelId, name }) {

    const isActive = useAppStore((state) => state.activeLabel === labelId)

    const { selectMode, selectModeDataType, setSelectModeDataType, selectData, unselectData, selectedData } = useAppStore(state => state)

    const labelsSelectMode = selectMode && selectModeDataType === 1;

    function handlePress() {

        if (labelsSelectMode) {
            if (labelId === 0) return

            toggleSelect()
            return
        }

        useAppStore.setState({ activeLabel: labelId })
    }

    function handleLongPress() {
        if ((selectMode && selectModeDataType === 0) || labelId === 0) return

        setSelectModeDataType(1)
        toggleSelect()

    }

    function toggleSelect() {
        if (selectedData.includes(labelId)) {
            unselectData({ id: labelId })
            return
        }
        selectData({ id: labelId })
    }

    // isActive ? { backgroundColor: Colors.green600 } : {}, labelsSelectMode && selectedData.includes(labelId) ? { borderColor: Colors.primary } : {}

    let labelDynamicStyles = {
        backgroundColor: isActive ? Colors.green600 : Colors.gray900,
        borderColor: labelsSelectMode && selectedData.includes(labelId) ? Colors.primary : Colors.gray900,
        marginHorizontal: labelsSelectMode && selectedData.includes(labelId) ? 2 : 0,
    }

    return (
        <Pressable
            style={[styles.container, labelDynamicStyles]}
            onPress={handlePress}
            onLongPress={handleLongPress}
        >
            <Text style={styles.labelText}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: Colors.gray900,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1,
        borderWidth: 1,
        borderColor: Colors.green400,
    },
    labelText: {
        fontSize: 12,
        color: 'white'
    },
    labelInSelectMode: {
        borderWidth: 1,
        borderColor: Colors.primary
    }

})