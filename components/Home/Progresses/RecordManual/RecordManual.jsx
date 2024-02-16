import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

export default function RecordManual() {
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
                    <MaterialCommunityIcons name="star-shooting" size={22} color={Colors.gray700} />
                    <Text style={styles.title}>Pages read</Text>

                </View>
                <MaterialIcons name="push-pin" size={22} color={Colors.gray700} />
            </View>


            <View style={styles.bottomContainer}>

                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 24, color: Colors.green600 }}>125</Text>
                    </View>

                    <LineChart
                        data={data}
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

                </View>

                <View style={[styles.flexBetween, { alignItems: 'flex-end', marginTop: 8 }]}>
                    <View style={styles.detailsContainer}>

                        <View style={styles.flexRow}>
                            <View style={styles.flexRow}>
                                <MaterialCommunityIcons name="clock-time-ten-outline" size={16} color={Colors.gray600} />
                                <Text style={{ fontSize: 12, color: Colors.gray600 }}>last update: today</Text>
                            </View>

                        </View>

                    </View>

                    <View style={styles.flexRow}>
                        <TextInput style={styles.recordNumberInput} defaultValue='5' keyboardType='number-pad' maxLength={4} />
                        <View style={styles.checkButton}>
                            <MaterialCommunityIcons name="plus" size={24} color={Colors.green600} />
                        </View>
                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
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
    }
})