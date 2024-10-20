import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomBar() {
    return (
        <View style={styles.container}>

            <View style={styles.plusButton}>
                <MaterialCommunityIcons name="plus" size={20} color='white' />
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