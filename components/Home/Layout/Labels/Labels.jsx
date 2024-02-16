import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Label from './Label'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Labels() {
    return (
        <View style={styles.container}>
            <View style={styles.plusButton}>
                <MaterialCommunityIcons name="plus" size={20} color='white' />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
            >

                <Label name={"All"} />
                <Label name={"Records"} />

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        gap: 4,

    },
    scrollView: {
        gap: 4,
    },
    plusButton: {
        backgroundColor: Colors.green600,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1
    },
})