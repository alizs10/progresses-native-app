import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Label from './Label';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLabelStore } from '../../../../store/label-store';

export default function Labels() {

    const labels = useLabelStore((state) => state.labels)

    return (
        <View style={styles.container}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
                decelerationRate={'fast'}
            >

                <Label key={'all'} name={'All'} labelId={0} />

                {labels.map(label => (
                    <Label key={label.id} name={label.name} labelId={label.id} />
                ))}
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