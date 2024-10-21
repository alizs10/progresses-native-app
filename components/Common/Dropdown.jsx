import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Dropdown({ label }) {
    return (
        <View style={styles.container}>

            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownTextValue}>No label</Text>
                <View style={styles.dropdownIconContainer}>
                    <MaterialCommunityIcons name="chevron-down" size={24} color="white" />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 10,
        height: 60,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    dropdownIconContainer: {
        position: 'absolute '
    },

    input: {
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        width: '100%',

        paddingHorizontal: 18,
        paddingVertical: 10,
        fontSize: 18,
        color: Colors.gray300,

    },
    labelContainer: {
        position: 'absolute',
        top: 0,
        left: 16,
        transform: [{ translateY: -10 }],
    },

    label: {
        backgroundColor: Colors.gray800,
        color: Colors.gray300,
        width: 'auto',
        alignSelf: 'flex-start',
        fontSize: 12,
        paddingHorizontal: 6
    },

    dropdownTextValue: {
        fontSize: 16,
        color: 'white'
    }
})