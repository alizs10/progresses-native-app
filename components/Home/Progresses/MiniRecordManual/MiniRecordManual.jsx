import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';

export default function MiniRecordManual({ data }) {

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
            plusBtnText: Colors.gray800,
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
            plusBtnText: 'white',
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
            plusBtnText: 'white',
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
            plusBtnText: Colors.gray800,
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
            plusBtnText: 'white',
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
            plusBtnText: 'white',
            highImportanceBg: Colors.red600,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
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
        labels: data.valueHistory.map(item => item.toString()), // optional,
        datasets: [
            {
                data: data.valueHistory,
                strokeWidth: 1.8 // optional
            }
        ],
    };
    return (
        <View style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: theme.border }]}>

            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={14} color={theme.title} />
                    <Text style={[styles.title, { color: theme.title }]}>{data.name}</Text>
                </View>
                <MaterialIcons name="push-pin" size={18} color={theme.title} />
            </View>

            <View style={styles.bottomContainer}>

                <View style={styles.flexBetween}>

                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 22, color: theme.recordNumber }}>{data.value}</Text>
                    </View>

                    <LineChart
                        data={chartData}
                        width={40}
                        height={20}
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
                </View>

                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                            <Text style={{ color: theme.labelText, fontSize: 10 }}>{data.label.name}</Text>
                        </View>
                        <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                            <Text style={{ color: 'white', fontSize: 10 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                        </View>
                    </View>
                    <TextInput style={[styles.recordNumberInput, { backgroundColor: theme.plusBtnBg, color: theme.plusBtnText }]} defaultValue='5' keyboardType='number-pad' maxLength={4} />
                </View>

            </View>

            <View style={[styles.flexColumn, { marginTop: 'auto', gap: 4 }]}>

                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="update" size={14} color={theme.time} />
                    <Text style={{ fontSize: 10, color: theme.time }}>{moment(data.updatedAt).fromNow()}</Text>
                </View>
                <View style={[styles.checkButton, { backgroundColor: theme.plusBtnBg }]}>
                    <MaterialCommunityIcons name="plus" size={22} color={theme.plusBtnText} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('window').width - 48) / 2,
        aspectRatio: 1,
        marginVertical: 4,
        padding: 8,
        borderWidth: 2,
        borderColor: Colors.gray500,
        backgroundColor: Colors.gray300,
        borderRadius: 20,
        flex: 1
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
        marginTop: 4,
        gap: 0
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

    checkButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 100,
        elevation: 1,
        marginTop: 'auto'
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

    recordNumberInput: {
        backgroundColor: 'white',
        color: Colors.green600,
        paddingVertical: 0,
        paddingHorizontal: 3,
        borderRadius: 100,
        fontSize: 12,
        textAlign: 'center',
        elevation: 1
    }
})