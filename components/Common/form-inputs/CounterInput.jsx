import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function CounterInput({ label, value, onUp, onDown, disabled, error }) {
    return (
        <View>
            <View style={styles.container}>
                <Pressable onPress={onDown} style={[styles.buttonContainer, disabled ? styles.disabledBorder : error ? { borderColor: Colors.red500 } : {}]}>
                    <MaterialCommunityIcons name="minus" size={24} color={!disabled ? error ? Colors.red500 : Colors.gray300 : Colors.gray600} />

                </Pressable>
                <View style={[styles.inputContainer, !disabled && error ? { borderColor: Colors.red500 } : null]}>
                    <View style={styles.labelContainer}>
                        <Text style={[styles.label, !disabled && error ? { color: Colors.red500 } : null]}>{label}</Text>
                    </View>

                    <Text style={[styles.value, !disabled && error ? { color: Colors.red500 } : null]}>{value}</Text>
                </View>
                <Pressable onPress={onUp} style={[styles.buttonContainer, disabled ? styles.disabledBorder : error ? { borderColor: Colors.red500 } : {}]}>
                    <MaterialCommunityIcons name="plus" size={24} color={!disabled ? error ? Colors.red500 : Colors.gray300 : Colors.gray600} />
                </Pressable>
            </View>
            {!disabled && error && (
                <View style={styles.displayErrorContainer}>
                    <Entypo name="dot-single" size={18} color={Colors.red500} />
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '31%',
        height: 60,
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        justifyContent: 'center',
        alignSelf: 'center',
        // paddingHorizontal: 25,
        // marginTop: 10,
        position: 'relative',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '31%',
        height: 60,
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
    },

    labelContainer: {
        position: 'absolute',
        top: 0,
        left: '50%',
        width: 100,
        height: 20,
        transform: [{ translateX: -50 }, { translateY: -10 }],
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        backgroundColor: Colors.gray800,
        color: Colors.gray300,
        fontSize: 14,
        paddingHorizontal: 10
    },
    value: {
        fontSize: 24,
        color: Colors.gray300
    },
    disabledBorder: {
        borderColor: Colors.gray600,
    },
    disabledText: {
        color: Colors.gray600,
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