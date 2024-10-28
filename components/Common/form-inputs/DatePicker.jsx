import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'

export default function DatePicker({ label, value, handleChange, datePickerProps }) {

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
        <Pressable
            onPress={toggleDatePicker}
            style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={value.toLocaleDateString()}
                editable={false}
            />
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
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
})