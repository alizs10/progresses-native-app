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
                <Pressable onPress={() => onChange('black')} style={[styles.color, { backgroundColor: 'black' }]}>
                    {value === 'black' && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('white')} style={[styles.color, { backgroundColor: 'white' }]}>
                    {value === 'white' && (
                        <Feather name="check" size={24} color="black" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('yellow')} style={[styles.color, { backgroundColor: Colors.yellow700 }]}>
                    {value === 'yellow' && (
                        <Feather name="check" size={24} color="black" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('red')} style={[styles.color, { backgroundColor: Colors.red700 }]}>
                    {value === 'red' && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('violet')} style={[styles.color, { backgroundColor: Colors.violet800 }]}>
                    {value === 'violet' && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('turquoise')} style={[styles.color, { backgroundColor: Colors.turquoise700 }]}>
                    {value === 'turquoise' && (
                        <Feather name="check" size={24} color="white" />
                    )}
                </Pressable>
                <Pressable onPress={() => onChange('blue')} style={[styles.color, { backgroundColor: Colors.blue800 }]}>
                    {value === 'blue' && (
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