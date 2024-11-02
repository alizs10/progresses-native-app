import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLabelStore } from '../../store/label-store';
import { ColorSchemes } from '../../consts/ColorSchemes';
import { useAppStore } from '../../store/app-store';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Timeline from '../Common/Timeline/Timeline';

export default function Progress({ progress }) {

    let steps = progress.steps;
    let completedSteps = progress.steps.filter(step => step.isCompleted)
    let unCompletedSteps = progress.steps.filter(step => !step.isCompleted)

    let proceedPercentage = steps.length > 0 ? (completedSteps.length / steps.length) * 100 : 0;

    const { importanceLevels } = useAppStore(state => state)
    let importance = importanceLevels.find(importance => importance.id === progress.importance)

    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === progress.label)


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: progress.theme === 'white' ? 'black' : 'white' }]}>{progress.name}</Text>

            <View style={styles.flexRow}>
                <View style={[styles.labelContainer, { backgroundColor: ColorSchemes[progress.theme].infoBoxBg }]}>
                    <Text style={[styles.labelText, { color: ColorSchemes[progress.theme].textColor }]}>{label?.name ?? 'All'}</Text>
                </View>
                <View style={[styles.labelContainer, { backgroundColor: ColorSchemes[progress.theme].infoBoxBg }]}>
                    <Text style={[styles.labelText, { color: ColorSchemes[progress.theme].textColor }]}>{importance.name}</Text>
                </View>
            </View>
            <View style={[styles.deadlineContainer, { backgroundColor: ColorSchemes[progress.theme].infoBoxBg }]}>
                <Text style={[styles.deadlineText, { color: ColorSchemes[progress.theme].textColor }]}>{progress.hasDeadline ? progress.deadline : 'No Deadline'}</Text>
            </View>

            <View style={[styles.processContainer, { backgroundColor: ColorSchemes[progress.theme].infoBoxBg }]}>

                <View style={styles.flexRow}>
                    <View style={styles.flexRow}>
                        <Ionicons name="checkmark-done" size={18} color={ColorSchemes[progress.theme].success} />
                        <Text style={{ fontSize: 12, color: ColorSchemes[progress.theme].textColor }}>
                            {completedSteps[completedSteps.length - 1].name === '' ? 'Step ' + completedSteps[completedSteps.length - 1].index : completedSteps[completedSteps.length - 1].name}
                        </Text>
                    </View>
                    <View style={styles.flexRow}>
                        <MaterialCommunityIcons name="chevron-double-right" size={18} color={ColorSchemes[progress.theme].dangerous} />
                        <Text style={{ fontSize: 12, color: ColorSchemes[progress.theme].textColor }}>
                            {unCompletedSteps[0].name === '' ? 'Step ' + unCompletedSteps[0].index : unCompletedSteps[0].name}
                        </Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={[styles.processBarContainer, { borderColor: ColorSchemes[progress.theme].bg }]}>
                        <View style={[styles.processBar, { width: proceedPercentage + '%', backgroundColor: ColorSchemes[progress.theme].bg }]}>
                        </View>
                    </View>
                    <View style={[styles.percentageContainer, { backgroundColor: ColorSchemes[progress.theme].bg }]}>
                        <Text style={[styles.processPercentage, { color: progress.theme === 'yellow' ? 'white' : ColorSchemes[progress.theme].textColor }]}>{proceedPercentage.toFixed(0)}%</Text>
                    </View>
                </View>

                <View style={styles.flexRow}>
                    <View style={[styles.stepsBoxContainer, { backgroundColor: ColorSchemes[progress.theme].bg }]}>
                        <Text style={[styles.stepsBoxText, { color: progress.theme === 'yellow' ? 'white' : ColorSchemes[progress.theme].textColor }]}>{`${completedSteps.length} of ${steps.length} steps is completed`}</Text>
                    </View>
                    <Text style={[styles.stepsBoxText, { marginLeft: 'auto', color: ColorSchemes[progress.theme].textColor }]}>{steps.length - completedSteps.length} {`step${unCompletedSteps.length > 1 && 's'}`} left</Text>
                </View>
            </View>


            <View style={[styles.stepsContainer, { backgroundColor: ColorSchemes[progress.theme].infoBoxBg }]}>

                <Timeline
                    color={ColorSchemes[progress.theme].textColor}
                    timelines={steps.map(step => ({ id: step.id, title: `Step ${step.index}`, details: step.name, isPassed: step.isCompleted }))} />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 8
    },
    flexRow: {
        flexDirection: 'row',
        gap: 8
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    labelContainer: {
        // padding: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    labelText: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    deadlineContainer: {
        // padding: 3,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deadlineText: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 8,
    },
    stepsBoxContainer: {
        // flex: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepsBoxText: {
        fontSize: 12,
        color: 'white',
        paddingVertical: 4,
    },
    stepsContainer: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepsText: {
        fontSize: 18,
        color: 'white',
        paddingVertical: 8,
    },
    processContainer: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        gap: 8,
    },
    processBarContainer: {
        width: '84%',
        height: 40,
        overflow: 'hidden',
        borderWidth: 2,
        borderRadius: 18,
    },
    processBar: {
        width: '100%',
        height: '100%',
        // borderRadius: 18,
        // paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    percentageContainer: {
        width: '12%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    processPercentage: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    }
})