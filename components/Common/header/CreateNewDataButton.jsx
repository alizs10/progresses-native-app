import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'

export default function CreateNewDataButton({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>Save</Text>
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
        // flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        color: Colors.blue500,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})