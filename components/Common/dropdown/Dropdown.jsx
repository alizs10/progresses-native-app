import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../consts/Colors'
import DropdownOptions from './DropdownOptions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Dropdown({ label, options, onSelect, value, error, valueInText = 'Not Selected' }) {

    const [optionsVis, setOptionsVis] = useState(false)

    function toggleOptions() {
        setOptionsVis(prevState => !prevState)
    }

    function handleSelectOption(val) {
        onSelect(val)
        toggleOptions()
    }



    return (
        <>
            <View style={styles.outerContainer}>
                <Pressable onPress={toggleOptions} style={[styles.container, error ? { borderColor: Colors.red500 } : {}]}>

                    <View style={styles.labelContainer}>
                        <Text style={[styles.label, error ? { color: Colors.red500 } : {}]}>{label}</Text>
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Text style={[styles.dropdownTextValue, error ? { color: Colors.red500 } : {}]}>{valueInText}</Text>
                        <View style={styles.dropdownIconContainer}>
                            <MaterialCommunityIcons name="chevron-down" size={24} color={error ? Colors.red500 : Colors.gray300} />
                        </View>
                    </View>

                </Pressable>

                {error && (
                    <View style={styles.displayErrorContainer}>
                        <Entypo name="dot-single" size={18} color={Colors.red500} />
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}

            </View>

            {optionsVis && (
                <DropdownOptions
                    title={`Select ${label}`}
                    onClose={toggleOptions}
                    options={options}
                    onSelect={handleSelectOption}
                    value={value}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    container: {
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
        // width: 100,
        height: 20,
        transform: [{ translateY: -10 }],
    },
    label: {
        backgroundColor: Colors.gray800,
        color: Colors.gray300,
        width: 'auto',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        fontSize: 14,
    },
    dropdownTextValue: {
        fontSize: 16,
        color: 'white'
    },
    displayErrorContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 16,
    },
    errorText: {
        color: Colors.red500,
        fontSize: 14,
    }
})