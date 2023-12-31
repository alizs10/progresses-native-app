import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.flexRow}>
                    <View>
                        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="white" />
                    </View>
                    <Text style={styles.title}>Goals & Rewards </Text>
                </View>
                <View style={styles.goalsCount}>
                    <MaterialCommunityIcons name="star" size={18} color={Colors.gray700} />
                    <Text style={styles.titleHighlight}>3</Text>
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
    goalsCount: {
        backgroundColor: Colors.yellow400,
        flexDirection: 'row',
        gap: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
    },
    titleHighlight: {
        color: Colors.gray700,
        fontSize: 14,
        fontWeight: 'bold',

    },
})