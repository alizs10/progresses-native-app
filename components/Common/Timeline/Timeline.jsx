import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Timeline({ timelines, color }) {

    return (
        <View style={styles.container}>

            {timelines.map(timeline => (
                <View key={timeline.id} style={styles.dotContainer}>
                    <View style={styles.flexRow}>
                        <View style={[styles.dot, { borderColor: color }]}>
                            {timeline.isPassed ? (
                                <Ionicons name="checkmark" size={16} color={color} />

                            ) : (
                                <Ionicons name="footsteps-sharp" size={16} color={color} />
                            )}
                        </View>
                        <Text style={[styles.title, { color }]}>{timeline.title}</Text>
                    </View>

                    <View style={[styles.detailsContainer, { borderColor: color }]}>
                        <Text style={[styles.details, { color }]}>{timeline.details === '' ? 'step not defined' : timeline.details}</Text>
                    </View>

                </View>
            ))}

            <View style={styles.dotContainer}>
                <View style={styles.flexRow}>
                    <View style={[styles.dot, { borderColor: color }]}>
                        <Ionicons name="flag" size={16} color={color} />
                    </View>
                    <Text style={[styles.title, { color }]}>Finish</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 15,
        gap: 12
    },
    flexRow: {
        // flex: 1,
        gap: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    dotContainer: {
        // flex: 1,
        gap: 12,
        // alignItems: 'center',
        flexDirection: 'column',
    },
    dot: {
        borderWidth: 1,
        borderColor: 'white',
        width: 30,
        aspectRatio: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'semibold'
    },
    detailsContainer: {
        paddingLeft: 27,
        borderLeftWidth: 1,
        marginLeft: 15,
        borderStyle: 'dashed',
        borderColor: 'white',
        paddingTop: 10,
        paddingBottom: 14
    },
    details: {
        fontSize: 14,
        color: 'white'
    }
})