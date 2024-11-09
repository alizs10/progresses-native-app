import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';
import { useLabelStore } from '../../../../store/label-store';
import { useDataStore } from '../../../../store/data-store';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../../../../store/app-store';
import { DataSelectModeContext } from '../../../../context/DataSelectModeContext';
import { recordsThemes } from '../../../../consts/DataThemeColors';

export default function Record({ data }) {

    let theme = recordsThemes[data.theme]

    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === data.label)

    const navigation = useNavigation()

    const { addRecordValue } = useDataStore(state => state)

    function handleAddValue() {
        addRecordValue(data.id)
    }


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
                <View style={styles.detailsContainer}>

                    <View style={styles.flexBetween}>
                        <View style={styles.flexRow}>
                            <Text style={{ fontSize: 24, color: theme.recordNumber }}>{data.value}</Text>
                        </View>

                        <Pressable
                            onPress={handleAddValue}
                            style={[styles.checkButton, { backgroundColor: theme.plusBtnBg }]}>
                            <MaterialCommunityIcons name="plus" size={24} color={theme.plusBtnText} />
                        </Pressable>
                    </View>

                    <View style={styles.flexBetween}>
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
    },
    detailsContainer: {
        width: '100%',
        gap: 12
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
        backgroundColor: Colors.green600,
        borderRadius: 10,
        elevation: 1
    },
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