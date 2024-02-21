import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Progress({ theme }) {
    return (
        <View style={[styles.container, { backgroundColor: theme.progressBg, borderColor: theme.border }]}>

            <View style={[styles.bgProceed, { backgroundColor: theme.progressBgFill }]}></View>
            <View style={styles.topContainer}>
                <Text style={[styles.title, { color: theme.title }]}>Read 1948</Text>
                <MaterialIcons name="push-pin" size={22} color={theme.title} />
            </View>
            <View>
                <View style={styles.bottomContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.flexRow}>
                            <View style={styles.flexRow}>
                                <Ionicons name="checkmark-done" size={18} color={theme.stepForwardIcon} />
                                <Text style={{ fontSize: 12, color: theme.stepForwardText }}>Pages: 50-80</Text>
                            </View>
                            <Text style={{ fontSize: 18 }}>{` `}</Text>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="chevron-double-right" size={18} color={theme.stepBackwardIcon} />
                                <Text style={{ fontSize: 12, color: theme.stepBackwardText }}>Pages: 81-120</Text>
                            </View>
                        </View>

                        <View style={styles.flexBetween}>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="clock-time-ten-outline" size={16} color={theme.time} />
                                <Text style={{ fontSize: 12, color: theme.time }}>1 day left</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <View style={[styles.stepsTag, { backgroundColor: theme.labelBg }]}>
                                    <Text style={{ color: theme.labelText, fontSize: 12 }}>3/4</Text>
                                </View>
                                <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                                    <Text style={{ color: theme.labelText, fontSize: 12 }}>Work</Text>
                                </View>
                                <View style={styles.importanceTag}>
                                    <Text style={{ color: 'white', fontSize: 12 }}>M</Text>
                                </View>
                            </View>

                        </View>
                    </View>


                </View>
                <View style={styles.stepsContainer}>
                    <View style={[styles.stepRect, { backgroundColor: theme.stepsRectBgFill }]}></View>
                    <View style={[styles.stepRect, { backgroundColor: theme.stepsRectBgFill }]}></View>
                    {/* <View style={styles.stepRect}></View> */}
                    <View style={[styles.stepRect, { backgroundColor: theme.stepsRectBg }]}></View>
                    <View style={[styles.stepRect, { backgroundColor: theme.stepsRectBg }]}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderWidth: 3,
        borderRadius: 25,
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
        fontWeight: 'bold',
    },
    bottomContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    detailsContainer: {
        width: '100%',
        gap: 8,
    },
    bgProceed: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: '25%',
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
        borderRadius: 10,
        elevation: 1
    },
    stepsTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    labelTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
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