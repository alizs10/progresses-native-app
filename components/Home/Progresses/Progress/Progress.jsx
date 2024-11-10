import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLabelStore } from '../../../../store/label-store';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDataStore } from '../../../../store/data-store';
import { swipeConfig } from '../../../../lib/rn-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../../../../store/app-store';
import { DataSelectModeContext } from '../../../../context/DataSelectModeContext';
import { progressesThemes } from '../../../../consts/DataThemeColors';
import moment from 'moment';

export default function Progress({ data }) {

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

    const { selectedData } = useAppStore(state => state)

    const { handlePressData, handleLongPressData, dataSelectMode } = useContext(DataSelectModeContext);

    function handlePress() {
        handlePressData(data.id, () => {
            navigation.navigate('ViewData', { data: data })
        })
    }

    function handleLongPress() {
        handleLongPressData(data.id)
    }


    return (
        <GestureRecognizer
            config={swipeConfig}
            onSwipeRight={(state) => onSwipeRight()}
            onSwipeLeft={onSwipeLeft}
            style={[styles.container, { backgroundColor: theme.progressBg, borderColor: dataSelectMode && selectedData.includes(data.id) ? Colors.primary : theme.border, marginBottom: dataSelectMode && selectedData.includes(data.id) ? 8 : 4 }]}>
            <Pressable
                style={{ flex: 1 }}
                onPress={handlePress}
                onLongPress={handleLongPress}
            >

                <View style={[styles.bgProceed, { backgroundColor: theme.progressBgFill, width: (completedSteps.length / steps.length) * 100 + '%' }]}></View>

                <View style={styles.innerContainer}>


                    <View style={styles.topContainer}>
                        <Text style={[styles.title, { color: theme.title }]}>{data.name}</Text>
                        {data.isPinned && (
                            <MaterialIcons name="push-pin" size={22} color={theme.title} />
                        )}
                    </View>
                    <View>
                        <View style={styles.bottomContainer}>
                            <View style={styles.detailsContainer}>
                                <View style={[styles.flexRow, { columnGap: 10 }]}>
                                    {completedSteps.length > 0 && (
                                        <View style={styles.flexRow}>
                                            <Ionicons name="checkmark-done" size={18} color={theme.stepForwardIcon} />
                                            <Text style={{ fontSize: 12, color: theme.stepForwardText }}>
                                                {completedSteps[completedSteps.length - 1].name === '' ? 'Step ' + completedSteps[completedSteps.length - 1].index : completedSteps[completedSteps.length - 1].name}
                                            </Text>
                                        </View>
                                    )}
                                    {unCompletedSteps.length > 0 && (
                                        <View style={styles.flexRow}>
                                            <MaterialCommunityIcons name="chevron-double-right" size={18} color={theme.stepBackwardIcon} />
                                            <Text style={{ fontSize: 12, color: theme.stepBackwardText }}>
                                                {unCompletedSteps[0].name === '' ? 'Step ' + unCompletedSteps[0].index : unCompletedSteps[0].name}
                                            </Text>
                                        </View>
                                    )}
                                </View>

                                <View style={styles.flexBetween}>
                                    <View style={styles.flexRow}>
                                        <MaterialCommunityIcons name="clock-time-ten-outline" size={16} color={theme.time} />
                                        <Text style={{ fontSize: 12, color: theme.time }}>{data.hasDeadline ? `${moment(new Date(data.deadline)).fromNow(true)} left` : 'Not Set'}</Text>

                                    </View>
                                    <View style={styles.flexRow}>
                                        <View style={[styles.stepsTag, { backgroundColor: theme.labelBg }]}>
                                            <Text style={{ color: theme.labelText, fontSize: 12 }}>{completedSteps.length}/{steps.length}</Text>
                                        </View>
                                        <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                                            <Text style={{ color: theme.labelText, fontSize: 12 }}>{label?.name ?? 'All'}</Text>
                                        </View>
                                        <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                                            <Text style={{ color: 'white', fontSize: 12 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>


                        </View>
                        <View style={styles.stepsContainer}>

                            {data.steps.map((step, index) => (
                                <View key={step.id} style={[styles.stepRect, { backgroundColor: step.isCompleted ? theme.stepsRectBgFill : theme.stepsRectBg, width: 100 / data.steps.length - 1 + '%' }]}></View>
                            ))}

                        </View>
                    </View>
                </View>
            </Pressable>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 4,

        borderWidth: 3,
        borderRadius: 25,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative'
    },
    innerContainer: {
        paddingHorizontal: 20,
        paddingVertical: 14,
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
        alignItems: 'flex-end',
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
        right: 0,
        zIndex: 0,
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