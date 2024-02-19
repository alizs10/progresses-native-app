import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

export default function MiniRecordManual() {

    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => Colors.green600,
        strokeWidth: 0, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                data: [10, 5, 15, 20, 30, 20, 25],
                strokeWidth: 1.8 // optional
            }
        ],
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={14} color={Colors.gray700} />
                    <Text style={styles.title}>Not Smoking</Text>
                </View>
                <MaterialIcons name="push-pin" size={18} color={Colors.gray700} />
            </View>

            <View style={styles.bottomContainer}>



                <View style={styles.flexColumn}>
                    <View style={styles.flexBetween}>

                        <View style={styles.flexRow}>
                            <Text style={{ fontSize: 24, color: Colors.green600 }}>11</Text>
                        </View>

                        <LineChart
                            data={data}
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

                    <View style={styles.flexRow}>
                        <MaterialCommunityIcons name="clock-time-ten-outline" size={14} color={Colors.gray600} />
                        <Text style={{ fontSize: 10, color: Colors.gray600 }}>last update: today</Text>
                    </View>

                    <View style={styles.flexBetween}>

                        <View style={[styles.flexRow, { alignSelf: 'flex-end' }]}>
                            <View style={styles.labelTag}>
                                <Text style={{ color: 'white', fontSize: 10 }}>Work</Text>
                            </View>
                            <View style={styles.importanceTag}>
                                <Text style={{ color: 'white', fontSize: 10 }}>M</Text>
                            </View>
                        </View>

                        <View style={styles.flexRow}>
                            <TextInput style={styles.recordNumberInput} defaultValue='5' keyboardType='number-pad' maxLength={4} />
                            <View style={styles.checkButton}>
                                <MaterialCommunityIcons name="plus" size={22} color={Colors.green600} />
                            </View>


                        </View>
                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        marginTop: 8,
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 2,
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
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
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius: 100,
        fontSize: 12,
        textAlign: 'center',
        elevation: 1
    }
})