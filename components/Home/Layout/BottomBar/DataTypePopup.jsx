import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../Common/Button'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DataTypePopup() {
    return (
        <View style={styles.container}>
            <Button icon={<MaterialCommunityIcons name="progress-clock" size={22} color={'white'} />} bgColor={Colors.gray600} textSize={18} textColor='white' text="New Progress" />
            <Button icon={<MaterialCommunityIcons name="star-shooting-outline" size={22} color={'white'} />} bgColor={Colors.gray600} textSize={18} textColor='white' text="New Records" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '125%',
        right: 0,
        gap: 8,

    }
})