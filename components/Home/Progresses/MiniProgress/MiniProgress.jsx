import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MiniProgress({ data }) {

    const progressesThemes = {
        white: {
            border: 'white',
            progressBg: Colors.gray300,
            progressBgFill: 'white',
            title: Colors.gray700,
            stepForwardIcon: Colors.green600,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray700,
            stepBackwardText: Colors.gray700,
            time: Colors.gray700,
            labelBg: Colors.gray300,
            labelText: Colors.gray800,
            stepsRectBg: Colors.gray400,
            stepsRectBgFill: Colors.green600,
        },
        violet: {
            border: Colors.violet800,
            progressBg: Colors.violet900,
            progressBgFill: Colors.violet800,
            title: 'white',
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.violet800,
            labelText: 'white',
            stepsRectBg: Colors.violet200,
            stepsRectBgFill: Colors.green500,
        },
        blue: {
            border: Colors.blue800,
            progressBg: Colors.blue900,
            progressBgFill: Colors.blue800,
            title: 'white',
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.blue800,
            labelText: 'white',
            stepsRectBg: Colors.blue200,
            stepsRectBgFill: Colors.green500,
        },
        yellow: {
            border: Colors.yellow700,
            progressBg: Colors.yellow900,
            progressBgFill: Colors.yellow700,
            title: Colors.gray800,
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray800,
            stepBackwardText: Colors.gray800,
            time: Colors.gray800,
            labelBg: Colors.yellow700,
            labelText: Colors.gray800,
            stepsRectBg: Colors.yellow50,
            stepsRectBgFill: Colors.green500,
        },
        turquoise: {
            border: Colors.turquoise700,
            progressBg: Colors.turquoise900,
            progressBgFill: Colors.turquoise700,
            title: 'white',
            stepForwardIcon: Colors.green300,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.turquoise700,
            labelText: 'white',
            stepsRectBg: Colors.gray200,
            stepsRectBgFill: Colors.green400,
        },
        red: {
            border: Colors.red700,
            progressBg: Colors.red900,
            progressBgFill: Colors.red700,
            title: 'white',
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.red700,
            labelText: 'white',
            stepsRectBg: Colors.gray200,
            stepsRectBgFill: Colors.green500,
        },
    }

    let theme = progressesThemes[data.theme]



    return (
        <View style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: theme.border }]}>

            <View style={styles.topContainer}>
                <Text style={[styles.title, { color: theme.title }]}>Read 1948</Text>
                <MaterialIcons name="push-pin" size={18} color={theme.title} />
            </View>

            <View style={styles.bottomContainer}>

                <View style={{ width: '100%' }}>
                    <View style={styles.flexRow}>
                        <Ionicons name="checkmark-done" size={14} color={theme.stepForwardIcon} />
                        <Text style={{ fontSize: 10, color: theme.stepForwardText }}>Pages: 50-80</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <MaterialCommunityIcons name="chevron-double-right" size={14} color={theme.stepBackwardIcon} />
                        <Text style={{ fontSize: 10, color: theme.stepBackwardText }}>Pages: 81-120</Text>
                    </View>

                    <View style={[styles.flexBetween, { marginTop: 6 }]}>

                        <View style={styles.flexColumn}>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="clock-time-ten-outline" size={14} color={theme.time} />
                                <Text style={{ fontSize: 10, color: theme.time }}>1 day left</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <View style={styles.importanceTag}>
                                    <Text style={{ color: 'white', fontSize: 10 }}>M</Text>
                                </View>
                                <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                                    <Text style={{ color: theme.labelText, fontSize: 10 }}>Work</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={[styles.circularProgressContainer, { backgroundColor: theme.progressBg, borderColor: theme.border }]}>
                                <View style={[styles.circularProgressFill, { backgroundColor: theme.progressBgFill }]}></View>
                                <Text style={[styles.circularProgressText, { color: theme.labelText }]}>75</Text>
                            </View>
                            <Text style={[styles.stepsCount, { color: theme.labelText }]}>3/4</Text>
                        </View>
                    </View>



                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - 48) / 2,
        marginVertical: 4,
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
        zIndex: 0,
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