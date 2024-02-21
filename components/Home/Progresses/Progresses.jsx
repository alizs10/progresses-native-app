import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ProgressesTitle from './ProgressesTitle'
import Progress from './Progress/Progress'
import { Ionicons } from '@expo/vector-icons';
import Record from './Record/Record';
import RecordManual from './RecordManual/RecordManual';
import MiniProgress from './MiniProgress/MiniProgress';
import MiniRecord from './MiniRecord/MiniRecord';
import MiniRecordManual from './MiniRecordManual/MiniRecordManual';
import Colors from '../../../consts/Colors';

export default function Progresses() {


    // themes count: 5
    // themes one: 5
    // themes two: 5
    // themes three: 5
    // themes four: 5
    // themes five: 5

    const themes = {
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
            labelBg: Colors.gray200,
            labelText: Colors.gray600,
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
            labelBg: Colors.violet700,
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
            labelBg: Colors.blue700,
            labelText: 'white',
            stepsRectBg: Colors.blue200,
            stepsRectBgFill: Colors.green500,
        },
        yellow: {
            border: Colors.yellow700,
            progressBg: Colors.yellow900,
            progressBgFill: Colors.yellow700,
            title: Colors.gray700,
            stepForwardIcon: Colors.green500,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray700,
            stepBackwardText: Colors.gray700,
            time: Colors.gray700,
            labelBg: Colors.yellow300,
            labelText: Colors.gray700,
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
            labelBg: Colors.turquoise500,
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
            labelBg: Colors.red600,
            labelText: 'white',
            stepsRectBg: Colors.gray200,
            stepsRectBgFill: Colors.green500,
        },
    }


    return (
        <View style={styles.container}>


            <View style={styles.flexSpaceBetween}>
                <ProgressesTitle title={'All'} count={3} />
                <Ionicons name="grid-outline" size={18} color="white" />
            </View>

            <ScrollView>
                <View style={styles.progressesContainer}>
                    <Progress theme={themes.red} />
                    <Progress theme={themes.turquoise} />
                    <Progress theme={themes.yellow} />
                    <Progress theme={themes.white} />
                    <Progress theme={themes.violet} />
                    <Progress theme={themes.blue} />
                </View>
                {/* <Progress />
                <Record />
                <RecordManual /> */}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    progressesContainer: {
        gap: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // width: '100%',
        marginTop: 12,
    }
})