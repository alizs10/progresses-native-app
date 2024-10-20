import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Reward() {
    return (
        <View style={styles.container}>
            <View style={styles.flexSpaceBetween}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star" size={22} color={Colors.gray800} />
                    <Text style={styles.title}>My Reward</Text>
                </View>
                <View style={styles.progressesCount}>
                    <Text style={styles.progressesCountText}>3</Text>
                    <Feather name="check-circle" size={14} color="white" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderWidth: 3,
        borderColor: Colors.yellow400,
        borderRadius: 25,
        backgroundColor: Colors.yellow200,
        overflow: 'hidden',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        gap: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.gray800
    },

    flexSpaceBetween: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    progressesCount: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        backgroundColor: Colors.gray800,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    progressesCountText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
    },
})