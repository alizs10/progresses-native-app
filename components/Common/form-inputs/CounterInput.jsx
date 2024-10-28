import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function CounterInput({ label, value, onUp, onDown, disabled }) {
    return (
        <View style={styles.container}>

            <Pressable onPress={onUp} style={[styles.buttonContainer, disabled ? styles.disabledBorder : {}]}>
                <MaterialCommunityIcons name="plus" size={24} color={!disabled ? Colors.gray300 : Colors.gray600} />
            </Pressable>
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{label}</Text>
                </View>

                <Text style={styles.value}>{value}</Text>
            </View>
            <Pressable onPress={onDown} style={[styles.buttonContainer, disabled ? styles.disabledBorder : {}]}>
                <MaterialCommunityIcons name="minus" size={24} color={!disabled ? Colors.gray300 : Colors.gray600} />

            </Pressable>

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
    }
})