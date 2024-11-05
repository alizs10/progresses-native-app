import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLabelStore } from '../../../../store/label-store';
import { useDataStore } from '../../../../store/data-store';
import GestureRecognizer from 'react-native-swipe-gestures';
import { swipeConfig } from '../../../../lib/rn-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

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
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
        violet: {
            border: Colors.violet900,
            progressBg: Colors.violet950,
            progressBgFill: Colors.violet900,
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
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
        blue: {
            border: Colors.blue900,
            progressBg: Colors.blue950,
            progressBgFill: Colors.blue900,
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
            highImportanceBg: Colors.red500,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
        yellow: {
            border: Colors.yellow400,
            progressBg: Colors.yellow900,
            progressBgFill: Colors.yellow400,
            title: Colors.gray800,
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray800,
            stepBackwardText: Colors.gray800,
            time: Colors.gray800,
            labelBg: Colors.yellow800,
            labelText: Colors.gray800,
            stepsRectBg: Colors.yellow50,
            stepsRectBgFill: Colors.green500,
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
        turquoise: {
            border: Colors.turquoise900,
            progressBg: Colors.turquoise950,
            progressBgFill: Colors.turquoise900,
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
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue600,
            lowImportanceBg: Colors.green500,
        },
        red: {
            border: Colors.red600,
            progressBg: Colors.red900,
            progressBgFill: Colors.red600,
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
            highImportanceBg: Colors.red500,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
    }

    let theme = progressesThemes[data.theme]

    let steps = data.steps;
    let completedSteps = data.steps.filter(step => step.isCompleted)
    let unCompletedSteps = data.steps.filter(step => !step.isCompleted)


    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === data.label)

    const { stepForward, stepBackward } = useDataStore(state => state)

    function onSwipeRight() {
        if (unCompletedSteps.length === 0) return
        stepForward(data.id, unCompletedSteps[0].id)
    }

    function onSwipeLeft() {
        if (completedSteps.length === 0) return
        stepBackward(data.id, completedSteps[completedSteps.length - 1].id)
    }

    const navigation = useNavigation()

    return (
        <GestureRecognizer
            config={swipeConfig}
            onSwipeRight={onSwipeRight}
            onSwipeLeft={onSwipeLeft}
            style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: theme.border }]}>

            <Pressable
                style={{ flex: 1 }}
                onPress={() => navigation.navigate('ViewData', { data: data })}>


                <View style={styles.topContainer}>
                    <Text style={[styles.title, { color: theme.title }]}>{data.name}</Text>
                    {data.isPinned && (
                        <MaterialIcons name="push-pin" size={18} color={theme.title} />
                    )}
                </View>

                <View style={[styles.flexColumn, { marginTop: 10, gap: 2 }]}>

                    {completedSteps.length > 0 && (
                        <View style={styles.flexRow}>
                            <Ionicons name="checkmark-done" size={14} color={theme.stepForwardIcon} />
                            <Text style={{ fontSize: 10, color: theme.stepForwardText }}>
                                {completedSteps[completedSteps.length - 1].name === '' ? 'Step ' + completedSteps[completedSteps.length - 1].index : completedSteps[completedSteps.length - 1].name}
                            </Text>
                        </View>
                    )}
                    {unCompletedSteps.length > 0 && (
                        <View style={styles.flexRow}>
                            <MaterialCommunityIcons name="chevron-double-right" size={14} color={theme.stepBackwardIcon} />
                            <Text style={{ fontSize: 10, color: theme.stepBackwardText }}>
                                {unCompletedSteps[0].name === '' ? 'Step ' + unCompletedSteps[0].index : unCompletedSteps[0].name}
                            </Text>
                        </View>
                    )}

                    <View style={[styles.flexRow, { alignItems: 'flex-start', marginTop: 6 }]}>
                        <MaterialCommunityIcons name="clock-time-ten-outline" size={14} color={theme.time} />
                        <View>
                            <Text style={{ fontSize: 10, color: theme.time }}>Deadline {data.hasDeadline ? '1 day left' : 'Not Set'}</Text>
                        </View>
                    </View>

                </View>

                <View style={[styles.flexBetween, { marginTop: 'auto' }]}>

                    <View style={[styles.flexRow, { alignSelf: 'flex-end' }]}>
                        <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                            <Text style={{ color: 'white', fontSize: 10 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                        </View>
                        <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                            <Text style={{ color: theme.labelText, fontSize: 10 }}>{label?.name ?? 'All'}</Text>
                        </View>

                    </View>
                    <View>
                        <View style={[styles.circularProgressContainer, { backgroundColor: theme.progressBg, borderColor: theme.border }]}>
                            <View style={[styles.circularProgressFill, { backgroundColor: theme.progressBgFill, height: completedSteps.length / steps.length * 100 + '%' }]}></View>
                            <Text style={[styles.circularProgressText, { color: theme.labelText }]}>{Math.floor((completedSteps.length / steps.length) * 100)}</Text>
                        </View>
                        <Text style={[styles.stepsCount, { color: theme.labelText }]}>{completedSteps.length}/{steps.length}</Text>
                    </View>
                </View>
            </Pressable>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - 48) / 2,
        aspectRatio: 1,
        marginVertical: 4,
        padding: 10,
        borderWidth: 2,
        borderColor: Colors.gray600,
        borderRadius: 15,
        backgroundColor: Colors.gray300,
        elevation: 1,
        height: '100%'
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
})