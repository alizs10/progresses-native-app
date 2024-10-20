import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from '../../../Common/Button'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OutsidePressHandler from 'react-native-outside-press';

export default function DataTypePopup({ handlePress, handleClose }) {

    return (
        <OutsidePressHandler
            style={styles.container}
            onOutsidePress={handleClose}
        >
            <View style={styles.container}>
                <Button
                    onPress={() => handlePress("NewProgress")}
                    icon={
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={24}
                            color={'white'}
                        />}
                    bgColor={Colors.green600}
                    textSize={18}
                    textColor='white'
                    text="New Progress"
                />

                <Button
                    onPress={() => handlePress("NewRecord")}
                    icon={
                        <MaterialCommunityIcons
                            name="star-shooting-outline"
                            size={24}
                            color={'black'}
                        />}
                    bgColor={Colors.yellow700}
                    textSize={18}
                    textColor='black'
                    text="New Record"
                />
            </View>
        </OutsidePressHandler>
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