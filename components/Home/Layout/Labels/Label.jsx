import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { useAppStore } from '../../../../store/app-store'
import { useDataStore } from '../../../../store/data-store'

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

    let labelDynamicStyles = {
        backgroundColor: isActive ? Colors.green600 : Colors.gray900,
        borderColor: labelsSelectMode && selectedData.includes(labelId) ? Colors.primary : Colors.gray900,
        marginHorizontal: labelsSelectMode && selectedData.includes(labelId) ? 2 : 0,
    }

    const { data } = useDataStore(state => state)
    let count = data.filter(item => (item.label === labelId && item.deletedAt === null)).length

    return (
        <Pressable
            style={[styles.container, labelDynamicStyles]}
            onPress={handlePress}
            onLongPress={handleLongPress}
        >
            <Text style={styles.labelText}>{name}</Text>
            {count > 0 && (
                <Text style={styles.countText}>{'('}{count}{')'}</Text>
            )}
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
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    labelText: {
        fontSize: 12,
        color: 'white'
    },
    labelInSelectMode: {
        borderWidth: 1,
        borderColor: Colors.primary
    },
    countText: {
        fontSize: 10,
        color: 'white'
    }

})