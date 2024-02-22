import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

export default function RecordManual({ data }) {

    const themes = {
        white: {
            border: 'white',
            progressBg: Colors.gray300,
            progressBgFill: 'white',
            title: Colors.gray700,
            recordNumber: Colors.gray700,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray700,
            stepBackwardText: Colors.gray700,
            time: Colors.gray700,
            labelBg: Colors.gray300,
            labelText: Colors.gray700,
            plusBtnBg: Colors.gray300,
            plusBtnText: Colors.gray800
        },
        violet: {
            border: Colors.violet900,
            progressBg: Colors.violet800,
            progressBgFill: Colors.violet900,
            title: 'white',
            recordNumber: Colors.violet200,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.violet800,
            labelText: 'white',
            plusBtnBg: Colors.violet800,
            plusBtnText: 'white'
        },
        blue: {
            border: Colors.blue900,
            progressBg: Colors.blue800,
            progressBgFill: Colors.blue900,
            title: 'white',
            recordNumber: Colors.blue200,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.blue800,
            labelText: 'white',
            plusBtnBg: Colors.blue800,
            plusBtnText: 'white'
        },
        yellow: {
            border: Colors.yellow400,
            progressBg: Colors.yellow900,
            progressBgFill: Colors.yellow400,
            title: Colors.gray800,
            recordNumber: Colors.gray700,
            stepBackwardIcon: Colors.red500,
            stepForwardText: Colors.gray800,
            stepBackwardText: Colors.gray800,
            time: Colors.gray800,
            labelBg: Colors.yellow700,
            labelText: Colors.gray800,
            plusBtnBg: Colors.yellow700,
            plusBtnText: Colors.gray800
        },
        turquoise: {
            border: Colors.turquoise900,
            progressBg: Colors.turquoise700,
            progressBgFill: Colors.turquoise900,
            title: 'white',
            recordNumber: Colors.turquoise100,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.turquoise700,
            labelText: 'white',
            plusBtnBg: Colors.turquoise700,
            plusBtnText: 'white'
        },
        red: {
            border: Colors.red600,
            progressBg: Colors.red700,
            progressBgFill: Colors.red600,
            title: 'white',
            recordNumber: Colors.red200,
            stepBackwardIcon: Colors.red500,
            stepForwardText: 'white',
            stepBackwardText: 'white',
            time: 'white',
            labelBg: Colors.red700,
            labelText: 'white',
            plusBtnBg: Colors.red700,
            plusBtnText: 'white'
        },
    }

    let theme = themes[data.theme]




    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => theme.recordNumber,
        strokeWidth: 0, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                data: [10, 5, 15, 20, 30, 20, 25],
                strokeWidth: 1.8 // optional
            }
        ],
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: theme.border }]}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={22} color={theme.title} />
                    <Text style={[styles.title, { color: theme.title }]}>Pages read</Text>

                </View>
                <MaterialIcons name="push-pin" size={22} color={theme.title} />
            </View>


            <View style={styles.bottomContainer}>

                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 24, color: theme.recordNumber }}>125</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <LineChart
                            data={chartData}
                            width={50}
                            height={30}
                            withHorizontalLabels={false}
                            withVerticalLabels={false}
                            chartConfig={chartConfig}
                            withDots={false}
                            withInnerLines={false}
                            withOuterLines={false}
                            withShadow={false}
                            bezier
                            style={{ paddingRight: 0, paddingTop: 1 }}
                        />

                        <View style={styles.flexRow}>

                            <TextInput style={[styles.recordNumberInput, { backgroundColor: theme.plusBtnBg, color: theme.plusBtnText }]} defaultValue='5' keyboardType='number-pad' maxLength={4} />
                            <View style={[styles.checkButton, { backgroundColor: theme.plusBtnBg, color: theme.plusBtnText }]}>
                                <MaterialCommunityIcons name="plus" size={24} color={theme.plusBtnText} />
                            </View>
                        </View>

                    </View>

                </View>

                <View style={[styles.flexBetween, { alignItems: 'flex-end', marginTop: 8 }]}>
                    <View style={styles.detailsContainer}>

                        <View style={styles.flexRow}>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="clock-time-ten-outline" size={16} color={theme.time} />
                                <Text style={{ fontSize: 12, color: theme.time }}>last update: today</Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.flexRow}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
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
        columnGap: 4,
    },
    flexBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
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
    recordNumberInput: {
        backgroundColor: Colors.gray300,
        color: Colors.green600,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 100,
        fontSize: 14,
        textAlign: 'center',
        elevation: 1
    }
    ,
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