import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function UpdateButton({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <FontAwesome6 name="rotate" size={18} color={Colors.blue500} />
            <Text style={styles.text}>Update</Text>
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
        fontSize: 16,
        color: Colors.blue500,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})