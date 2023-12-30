import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Progress() {
    return (
        <View style={styles.container}>

            <View style={styles.bgProceed}></View>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Read 1948</Text>
                <MaterialIcons name="push-pin" size={24} color={Colors.gray700} />
            </View>
            <View>
                <View style={styles.bottomContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.flexRow}>
                            <View style={styles.flexRow}>
                                <Ionicons name="checkmark-done" size={24} color={Colors.green600} />
                                <Text style={{ color: Colors.green600 }}>step 9</Text>
                            </View>
                            <Text style={{ fontSize: 18 }}>{` `}</Text>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="chevron-double-right" size={24} color={Colors.red400} />
                                <Text style={{ color: Colors.red400 }}>step 10</Text>
                            </View>
                        </View>
                        <View style={styles.flexRow}>
                            <MaterialCommunityIcons name="clock-time-ten-outline" size={20} color={Colors.gray600} />
                            <Text style={{ color: Colors.gray600 }}>1 day left</Text>
                        </View>
                    </View>
                    <View style={styles.checkButton}>
                        <Ionicons name="checkmark" size={24} color={Colors.green600} />
                        {/* <Text style={{ color: Colors.gray700, fontSize: 12 }}>Check</Text> */}
                    </View>

                </View>
                <View style={styles.stepsContainer}>
                    <View style={styles.stepRect}></View>
                    <View style={styles.stepRect}></View>
                    <View style={styles.stepRect}></View>
                    <View style={[styles.stepRect, { backgroundColor: Colors.gray400 }]}></View>
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
        backgroundColor: Colors.gray500,
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
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    detailsContainer: {
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
        backgroundColor: Colors.green50,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    }
})