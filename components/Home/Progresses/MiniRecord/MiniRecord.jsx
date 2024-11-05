import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { useLabelStore } from '../../../../store/label-store';
import { useDataStore } from '../../../../store/data-store';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../../../../store/app-store';

export default function MiniRecord({ data }) {

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
            highImportanceBg: Colors.red500,
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
            labelBg: Colors.yellow800,
            labelText: Colors.gray800,
            plusBtnBg: Colors.yellow800,
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
            mediumImportanceBg: Colors.blue600,
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
            plusBtnBg: Colors.red800,
            plusBtnText: 'white',
            highImportanceBg: Colors.red500,
            mediumImportanceBg: Colors.blue500,
            lowImportanceBg: Colors.green500,
        },
    }

    let theme = themes[data.theme]



    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === data.label)


    const { addRecordValue } = useDataStore(state => state)

    function handleAddValue() {
        addRecordValue(data.id)
    }

    const navigation = useNavigation()

    const { selectedData, selectData, selectMode, unselectData } = useAppStore(state => state)

    function handlePress() {
        if (selectMode) {
            selectedData.includes(data.id) ? unselectData(data) : selectData(data)
            return
        }
        navigation.navigate('ViewData', { data: data })
    }

    function handleLongPress() {
        if (selectMode) return
        selectData(data)
    }

    return (
        <Pressable
            onPress={handlePress}
            onLongPress={handleLongPress}
            style={[styles.container, { backgroundColor: theme.progressBgFill, borderColor: selectedData.includes(data.id) ? Colors.primary : theme.border }]}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={14} color={theme.title} />
                    <Text numberOfLines={1} style={[styles.title, { color: theme.title }]}>{data.name}</Text>
                </View>
                {data.isPinned && (
                    <MaterialIcons name="push-pin" size={18} color={theme.title} />
                )}
            </View>

            <View style={styles.bottomContainer}>

                <View style={styles.flexColumn}>

                    <Text style={{ fontSize: 22, color: theme.recordNumber }}>{data.value}</Text>

                    <View style={styles.flexRow}>
                        <View style={[styles.importanceTag, { backgroundColor: data.importance === 0 ? theme.lowImportanceBg : data.importance === 1 ? theme.mediumImportanceBg : theme.highImportanceBg }]}>
                            <Text style={{ color: 'white', fontSize: 10 }}>{data.importance === 0 ? 'L' : data.importance === 1 ? 'M' : 'H'}</Text>
                        </View>
                        <View style={[styles.labelTag, { backgroundColor: theme.labelBg }]}>
                            <Text style={{ color: theme.labelText, fontSize: 10 }}>{label?.name ?? 'All'}</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={[styles.flexColumn, { marginTop: 'auto', gap: 4 }]}>

                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="update" size={14} color={theme.time} />
                    <View>
                        <Text style={{ fontSize: 10, color: theme.time }}>{moment(data.updatedAt).fromNow()}</Text>
                    </View>
                </View>

                <Pressable
                    onPress={handleAddValue}
                    style={[styles.checkButton, { backgroundColor: theme.plusBtnBg }]}>
                    <MaterialCommunityIcons name="plus" size={22} color={theme.plusBtnText} />
                </Pressable>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: (Dimensions.get('window').width - 48) / 2,
        width: (Dimensions.get('window').width - 48) / 2,
        aspectRatio: 1,
        marginVertical: 4,
        padding: 8,
        borderWidth: 2,
        borderColor: Colors.gray500,
        backgroundColor: Colors.gray300,
        borderRadius: 20,
        elevation: 1
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 14,
        color: Colors.gray700,
        fontWeight: 'bold'
    },
    bottomContainer: {
        marginTop: 4,
    },

    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
    flexColumn: {
        flexDirection: 'column',
        gap: 4,
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
})