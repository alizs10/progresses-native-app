import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Colors from '../../consts/Colors';

export default function ProgressesTitle({ title, count }) {
    return (
        <View style={styles.flexRow}>
            <Entypo name="dot-single" size={24} color="white" />
            <Text style={styles.title}>{title} <Text style={styles.titleHighlight}>{count}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        color: 'white'
    },
    titleHighlight: {
        color: Colors.red400,
        fontSize: 12,
        fontWeight: 'bold'
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
})