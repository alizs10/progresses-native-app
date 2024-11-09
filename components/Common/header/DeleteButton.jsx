import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function DeleteButton({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name="content-save" size={14} color={Colors.red600} />
            <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        borderRadius: 18,
        // backgroundColor: Colors.blue500,
        paddingVertical: 4,
        paddingHorizontal: 8,
        // gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 6
        // flexDirection: 'row'
    },
    text: {
        fontSize: 14,
        color: Colors.red600,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})