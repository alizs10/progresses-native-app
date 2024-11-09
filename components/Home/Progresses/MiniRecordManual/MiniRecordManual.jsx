import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
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

export default function MiniRecordManual({ data }) {

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

            style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: dataSelectMode && selectedData.includes(data.id) ? Colors.primary : theme.border }]}>

            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={14} color={theme.title} />
                    <Text style={[styles.title, { color: theme.title }]}>{data.name}</Text>
                </View>

                {data.isPinned && (
                    <MaterialIcons name="push-pin" size={18} color={theme.title} />
                )}
            </View>

            <View style={styles.bottomContainer}>

                <View style={styles.flexBetween}>

                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 22, color: theme.recordNumber }}>{data.value}</Text>
                    </View>


                    {data.valueHistory.length > 2 && (
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
                    )}
                </View>

                <View style={styles.flexRow}>
                    <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                        <Text style={{ color: 'white', fontSize: 10 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                    </View>
                    <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                        <Text style={{ color: theme.labelText, fontSize: 10 }}>{label?.name ?? 'All'}</Text>
                    </View>
                </View>
                {/* <View style={styles.flexBetween}> */}
                {/* <TextInput style={[styles.recordNumberInput, { backgroundColor: theme.plusBtnBg, color: theme.plusBtnText }]} defaultValue='5' keyboardType='number-pad' maxLength={4} /> */}
                {/* </View> */}

            </View>

            <View style={[styles.flexColumn, { marginTop: 'auto', gap: 4 }]}>

                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="update" size={14} color={theme.time} />
                    <Text style={{ fontSize: 10, color: theme.time }}>{moment(data.updatedAt).fromNow()}</Text>
                </View>
                <Pressable
                    onPress={handleAddValue}
                    style={[styles.checkButton, { backgroundColor: theme.plusBtnBg }]}>
                    <MaterialCommunityIcons name="plus" size={22} color={theme.plusBtnText} />
                    <Text style={[styles.stepValueText, { color: theme.plusBtnText }]}>{data.step}</Text>
                </Pressable>
            </View>

        </Pressable>
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
        alignItems: 'center',
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
    },
    stepValueText: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: 'white'
    }
})