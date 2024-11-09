import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import moment from 'moment';
import { useLabelStore } from '../../../../store/label-store';
import { useDataStore } from '../../../../store/data-store';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../../../../store/app-store';
import { DataSelectModeContext } from '../../../../context/DataSelectModeContext';
import { recordsThemes } from '../../../../consts/DataThemeColors';

export default function RecordManual({ data }) {

    let theme = recordsThemes[data.theme]

    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => theme.recordNumber,
        strokeWidth: 0, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const chartData = {
        labels: data.valueHistory.slice(-3).map(hisVal => new Date(hisVal.date)), // optional,
        datasets: [
            {
                data: data.valueHistory.slice(-3).map(hisVal => hisVal.step),
                strokeWidth: 1.8 // optional
            }
        ],
    };

    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === data.label)


    const { addManualRecordValue } = useDataStore(state => state)

    function handleAddValue() {
        addManualRecordValue(data.id)
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
        <Pressable
            onPress={handlePress}
            onLongPress={handleLongPress}
            style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: dataSelectMode && selectedData.includes(data.id) ? Colors.primary : theme.border, marginBottom: dataSelectMode && selectedData.includes(data.id) ? 8 : 4 }]}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={22} color={theme.title} />
                    <Text style={[styles.title, { color: theme.title }]}>{data.name}</Text>

                </View>
                {data.isPinned && (
                    <MaterialIcons name="push-pin" size={22} color={theme.title} />
                )}
            </View>


            <View style={styles.bottomContainer}>

                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 24, color: theme.recordNumber }}>{data.value}</Text>
                    </View>
                    <View style={styles.flexRow}>

                        {data.valueHistory.length > 2 && (
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
                        )}

                        <View style={styles.flexRow}>

                            {/* <TextInput style={[styles.recordNumberInput, { backgroundColor: theme.plusBtnBg, color: theme.plusBtnText }]} defaultValue={data.step.toString()} keyboardType='number-pad' maxLength={4} /> */}
                            <Pressable
                                onPress={handleAddValue}
                                style={[styles.checkButton, { backgroundColor: theme.plusBtnBg }]}>
                                <MaterialCommunityIcons name="plus" size={22} color={theme.plusBtnText} />
                                <Text style={[styles.stepValueText, { color: theme.plusBtnText }]}>{data.step}</Text>
                            </Pressable>
                        </View>

                    </View>

                </View>

                <View style={[styles.flexBetween, { alignItems: 'flex-end', marginTop: 8 }]}>

                    <View style={[styles.flexRow, { alignSelf: 'flex-end' }]}>
                        <MaterialCommunityIcons name="update" size={16} color={theme.time} />
                        <Text style={{ fontSize: 12, color: theme.time }}>Last update {moment(data.updatedAt).fromNow()}</Text>
                    </View>

                    <View style={styles.flexRow}>
                        <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                            <Text style={{ color: theme.labelText, fontSize: 12 }}>{label?.name ?? 'All'}</Text>
                        </View>
                        <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                            <Text style={{ color: 'white', fontSize: 12 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                        </View>

                    </View>
                </View>


            </View>
        </Pressable>
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
    },
    checkButton: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 1,
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
    },
    stepValueText: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: 'white',
        paddingRight: 4,
    }
})