import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Record() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={22} color={Colors.gray700} />
                    <Text style={styles.title}>Not Smoking days</Text>
                </View>
                <MaterialIcons name="push-pin" size={22} color={Colors.gray700} />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.detailsContainer}>
                    <View style={styles.flexBetween}>
                        <View style={styles.flexRow}>
                            <Text style={{ fontSize: 24, color: Colors.green600 }}>11</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <View style={styles.labelTag}>
                                <Text style={{ color: Colors.gray600, fontSize: 12 }}>Work</Text>
                            </View>
                            <View style={styles.importanceTag}>
                                <Text style={{ color: 'white', fontSize: 12 }}>M</Text>
                            </View>

                        </View>


                    </View>
                    <View style={styles.flexBetween}>

                        <View style={[styles.flexRow, { alignSelf: 'flex-end' }]}>
                            <MaterialCommunityIcons name="clock-time-ten-outline" size={16} color={Colors.gray600} />
                            <Text style={{ fontSize: 12, color: Colors.gray600 }}>last update: today</Text>
                        </View>
                        <View style={styles.checkButton}>
                            <MaterialCommunityIcons name="plus" size={24} color={Colors.green600} />
                        </View>
                    </View>

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
        borderColor: 'white',
        borderRadius: 25,
        backgroundColor: 'white',
        zIndex: 1,
        overflow: 'hidden'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 18,
        color: Colors.gray700,
        fontWeight: 'bold',
    },
    bottomContainer: {
        marginTop: 8,
    },
    detailsContainer: {
        width: '100%',
        gap: 8
    },
    bgProceed: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: '25%',
        backgroundColor: 'white',
        zIndex: 0
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
    flexBetween: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 4
    },
    stepsContainer: {
        marginTop: 18,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
    },
    stepRect: {
        width: '24%',
        height: 4,
        backgroundColor: Colors.green600,
        borderRadius: 10,
        elevation: 1
    },
    checkButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 2,
        backgroundColor: Colors.gray300,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    labelTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.gray300,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    importanceTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.green500,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    }
})