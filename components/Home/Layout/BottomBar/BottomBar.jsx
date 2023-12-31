import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomBar() {
    return (
        <View style={styles.container}>
            <View style={styles.bottomBar}>

                <View style={styles.listBar}>
                    <MaterialCommunityIcons name="home-outline" size={24} color={Colors.green500} />
                    <MaterialCommunityIcons name="progress-check" size={24} color={Colors.gray300} />
                    <MaterialCommunityIcons name="progress-clock" size={24} color={Colors.gray300} />
                </View>
                <View style={styles.plusButton}>
                    <MaterialCommunityIcons name="plus" size={20} color='white' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        height: 45,
        alignSelf: 'center',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        gap: 8
    },
    listBar: {
        backgroundColor: Colors.gray600,
        flexDirection: 'row',
        gap: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        elevation: 2
    },
    plusButton: {
        backgroundColor: Colors.green600,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        elevation: 2
    },

})