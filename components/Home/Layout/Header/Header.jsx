import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.flexRow, { flex: 3 }]}>
                    <View>
                        <Ionicons name="menu" size={28} color="white" />
                    </View>
                    <TextInput style={styles.searchInput} multiline={false} placeholderTextColor={Colors.gray300} placeholder='Search Progresses' />
                </View>
                <View style={[styles.flexRow, { flex: 1, justifyContent: 'flex-end' }]}>
                    <Feather name="target" size={24} color={Colors.yellow200} />
                    <AntDesign name="user" size={24} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    header: {
        backgroundColor: Colors.gray700,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    searchInput: {
        color: 'white',
        flex: 1,
        fontSize: 14
    }
})