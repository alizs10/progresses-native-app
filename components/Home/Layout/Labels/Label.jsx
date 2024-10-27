import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { useAppStore } from '../../../../store/app-store'

export default function Label({ labelId, name }) {

    const isActive = useAppStore((state) => state.activeLabel === labelId)


    return (
        <Pressable style={[styles.container, isActive ? { backgroundColor: Colors.green600 } : {}]} onPress={() => useAppStore.setState({ activeLabel: labelId })}>
            <Text style={styles.labelText}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: Colors.gray700,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1
    },
    labelText: {
        fontSize: 12,
        color: 'white'
    }

})