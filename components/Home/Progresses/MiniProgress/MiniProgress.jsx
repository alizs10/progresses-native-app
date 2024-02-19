import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressChart } from 'react-native-chart-kit';

export default function MiniProgress() {

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Text style={styles.title}>Read 1948</Text>
                <MaterialIcons name="push-pin" size={18} color={Colors.gray700} />
            </View>

            <View style={styles.bottomContainer}>

                <View style={{ width: '100%' }}>
                    <View style={styles.flexRow}>
                        <Ionicons name="checkmark-done" size={14} color={Colors.green600} />
                        <Text style={{ fontSize: 10, color: Colors.green600 }}>Pages: 50-80</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <MaterialCommunityIcons name="chevron-double-right" size={14} color={Colors.yellow800} />
                        <Text style={{ fontSize: 10, color: Colors.yellow800 }}>Pages: 81-120</Text>
                    </View>

                    <View style={[styles.flexBetween, { marginTop: 6 }]}>

                        <View style={styles.flexColumn}>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="clock-time-ten-outline" size={14} color={Colors.gray600} />
                                <Text style={{ fontSize: 10, color: Colors.gray600 }}>1 day left</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <View style={styles.importanceTag}>
                                    <Text style={{ color: 'white', fontSize: 10 }}>M</Text>
                                </View>
                                <View style={styles.labelTag}>
                                    <Text style={{ color: 'white', fontSize: 10 }}>Work</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.circularProgressContainer}>
                                <View style={styles.circularProgressFill}></View>
                                <Text style={styles.circularProgressText}>75</Text>
                            </View>
                            <Text style={styles.stepsCount}>3/4</Text>
                        </View>
                    </View>



                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderColor: Colors.gray600,
        borderRadius: 15,
        backgroundColor: Colors.gray300,
        elevation: 1
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 14,
        color: Colors.gray700,
        fontWeight: 'bold',
    },
    bottomContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    detailsContainer: {
        gap: 8,
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
    flexColumn: {
        flexDirection: 'column',
        gap: 8,
    },
    flexBetween: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },


    labelTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.gray500,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    importanceTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.green500,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },

    circularProgressContainer: {
        width: 35,
        height: 35,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: Colors.gray700,
        backgroundColor: Colors.gray300,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        elevation: 1
    },
    circularProgressFill: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 20,
        backgroundColor: Colors.gray500,
        zIndex: 0
    },
    circularProgressText: {
        fontSize: 14,
        color: Colors.gray700,
        fontWeight: 'bold',
    },
    stepsCount: {
        textAlign: 'center',
        fontSize: 10,
        color: Colors.gray800
    }
})