import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import CloseButton from '../CloseButton'

export default function DropdownOptions({ options, value, onSelect, onClose, title = "Choose an option" }) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <CloseButton size={22} color='white' onPress={onClose} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {options.map(opt => (
                    <Pressable key={opt.id} onPress={() => onSelect(opt.id)} style={styles.optionContainer}>
                        <Text style={styles.optionText}>{opt.value}</Text>
                        {opt.id === value && (
                            <Feather name="check" size={24} color="white" />
                        )}
                    </Pressable>
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        elevation: 10,
        backgroundColor: Colors.gray900,
        borderRadius: 25,
        flex: 1,
        width: '100%',
        maxHeight: 300,
        padding: 25,
        zIndex: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    optionContainer: {
        // padding: 10,
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
    },
    optionText: {
        fontSize: 22,
        color: 'white'
    }
})