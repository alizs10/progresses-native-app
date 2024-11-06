import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Label from './Label';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLabelStore } from '../../../../store/label-store';
import { useNavigation } from '@react-navigation/native';

export default function Labels() {

    const labels = useLabelStore((state) => state.labels)

    const navigator = useNavigation()

    function handleAddButton() {
        navigator.navigate('CreateLabel')
    }

    const scrollViewRef = useRef(null);
    useEffect(() => {
        // Scroll to the beginning when data changes
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: 0, animated: true });
        }
    }, [labels]);
    return (
        <View style={styles.container}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}
                decelerationRate={'fast'}
                ref={scrollViewRef}
            >

                <Pressable
                    onPress={handleAddButton}
                    style={styles.plusButton}>
                    <MaterialCommunityIcons name="plus" size={18} color="white" />
                </Pressable>

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
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: Colors.gray900,
        borderRadius: 25,
        justifyContent: 'center',
        elevation: 1
    },
})