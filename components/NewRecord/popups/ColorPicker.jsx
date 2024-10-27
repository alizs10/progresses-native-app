import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import Feather from '@expo/vector-icons/Feather';
import CloseButton from '../../Common/CloseButton';
export default function ColorPicker({ value, onChange, onClose }) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Choose a color</Text>

                <CloseButton size={22} color='white' onPress={onClose} />

            </View>

            <View style={styles.colorsContainer}>
                <Pressable onPress={() => onChange(1)} style={[styles.color, { backgroundColor: 'white' }]}>
                    {value === 1 && (
                        <Feather name="check" size={24} color="black" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange(2)} style={[styles.color, { backgroundColor: Colors.yellow700 }]}>
                    {value === 2 && (
                        <Feather name="check" size={24} color="black" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange(3)} style={[styles.color, { backgroundColor: Colors.red700 }]}>
                    {value === 3 && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange(4)} style={[styles.color, { backgroundColor: Colors.violet800 }]}>
                    {value === 4 && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange(5)} style={[styles.color, { backgroundColor: Colors.turquoise700 }]}>
                    {value === 5 && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange(6)} style={[styles.color, { backgroundColor: Colors.blue800 }]}>
                    {value === 6 && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        zIndex: 10,
        flex: 1,
        height: 'auto',
        backgroundColor: Colors.gray900,
        borderRadius: 18,
        elevation: 10,
        padding: 18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    colorsContainer: {
        // flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        gap: 8,
        marginTop: 18,
    },
    color: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: 'blue',
        borderRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',
    }
})