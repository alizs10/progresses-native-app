import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../../consts/Colors';

export default function DatePicker({ label, value, handleChange, datePickerProps, error }) {

    const [showDatePicker, setShowDatePicker] = useState(false)

    function toggleDatePicker() {
        setShowDatePicker(prevState => !prevState)
    }

    function onChange(event, date) {

        if (event.type === 'set') {

            if (Platform.OS === 'android') {
                setShowDatePicker(false)
                handleChange(event, date)
            }
        } else {
            setShowDatePicker(false)
        }
    }

    return (
        <View>

            <Pressable
                onPress={toggleDatePicker}
                style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, error ? { borderColor: Colors.red500, color: Colors.red500 } : {}]}
                    value={value.toLocaleDateString()}
                    editable={false}
                />
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, error ? { color: Colors.red500 } : {}]}>{label}</Text>
                </View>
                {showDatePicker && (
                    <RNDateTimePicker
                        mode="date"
                        value={value}
                        onChange={onChange}
                        {...datePickerProps}
                    // positiveButton={{ label: 'SET', textColor: 'green' }}
                    // neutralButton={{ label: 'Cancel', textColor: 'grey' }}
                    />

                )}
            </Pressable>
            {error && (
                <View style={styles.displayErrorContainer}>
                    <Entypo name="dot-single" size={18} color={Colors.red500} />
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        // backgroundColor: 'red',
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        width: '100%',
        height: 60,
        paddingHorizontal: 25,
        fontSize: 16,
        color: 'white',
        // backgroundColor: 'blue'
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
    displayErrorContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 16,
    },
    errorText: {
        color: Colors.red500,
        fontSize: 14,
    }
})