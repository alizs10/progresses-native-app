import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLabelStore } from '../../store/label-store';
import { ColorSchemes } from '../../consts/ColorSchemes';
import { useAppStore } from '../../store/app-store';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '../../consts/Colors';
import moment from 'moment';
import { useDataStore } from '../../store/data-store';
import Button from '../Common/Button';
import { useNavigation } from '@react-navigation/native';


export default function Record({ record }) {

    const { importanceLevels } = useAppStore(state => state)
    let importance = importanceLevels.find(importance => importance.id === record.importance)

    const labels = useLabelStore(state => state.labels)
    let label = labels.find(label => label.id === record.label)


    const { addRecordValue, subRecordValue, trashOne } = useDataStore(state => state)

    function onUp() {
        addRecordValue(record.id)
    }
    function onDown() {
        subRecordValue(record.id)
    }

    let disabled = record.value === 0 ? true : false;

    const navigator = useNavigation()

    function handleDelete() {
        trashOne(record.id)
        navigator.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: record.theme === 'white' ? 'black' : 'white' }]}>{record.name}</Text>

            <View style={styles.flexRow}>
                <View style={[styles.labelContainer, { backgroundColor: ColorSchemes[record.theme].infoBoxBg }]}>
                    <Text style={[styles.labelText, { color: ColorSchemes[record.theme].textColor }]}>{label?.name ?? 'All'}</Text>
                </View>
                <View style={[styles.labelContainer, { backgroundColor: ColorSchemes[record.theme].importance[importance.name.toLowerCase()].bg }]}>
                    <Text style={[styles.labelText, { color: ColorSchemes[record.theme].importance[importance.name.toLowerCase()].text }]}>{importance.name}</Text>
                </View>
            </View>


            <View style={[styles.valueContainer, styles.flexBetween, { backgroundColor: ColorSchemes[record.theme].infoBoxBg }]}>

                <Pressable onPress={onDown} style={[styles.buttonContainer, disabled ? styles.disabledBorder : { borderColor: ColorSchemes[record.theme].textColor }]}>
                    <MaterialCommunityIcons name="arrow-bottom-left" size={24} color={!disabled ? ColorSchemes[record.theme].textColor : Colors.gray600} />
                </Pressable>

                <View style={styles.valueInsideContainer}>
                    <View style={styles.valueLabelContainer}>
                        <Text style={[styles.valueLabelText, { color: ColorSchemes[record.theme].textColor }]}>Record</Text>
                    </View>

                    <Text style={[styles.valueText, { color: ColorSchemes[record.theme].textColor }]}>{record.value}</Text>
                </View>

                <Pressable onPress={onUp} style={[styles.buttonContainer, { borderColor: ColorSchemes[record.theme].textColor }]}>
                    <MaterialCommunityIcons name="arrow-top-right" size={24} color={ColorSchemes[record.theme].textColor} />
                </Pressable>

            </View>

            <View style={[styles.dateContainer, { backgroundColor: ColorSchemes[record.theme].infoBoxBg }]}>
                <Text style={[styles.dateText, { color: ColorSchemes[record.theme].textColor }]}>
                    Last update
                </Text>
                <Text style={[styles.dateText, { color: ColorSchemes[record.theme].textColor }]}>{moment(record.updatedAt).fromNow()}</Text>
            </View>

            <View style={[styles.dateContainer, { backgroundColor: ColorSchemes[record.theme].infoBoxBg }]}>
                <Text style={[styles.dateText, { color: ColorSchemes[record.theme].textColor }]}>
                    Created
                </Text>
                <Text style={[styles.dateText, { color: ColorSchemes[record.theme].textColor }]}>{moment(record.createdAt).fromNow()}</Text>
            </View>

            <Button
                text={'Move to trash'}
                textColor={Colors.red700}
                textSize={16}
                bgColor={Colors.red100}
                icon={<MaterialCommunityIcons name='trash-can' color={Colors.red700} size={22} />}
                onPress={handleDelete}
            />

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
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    dateContainer: {
        // padding: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dateText: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    valueContainer: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    valueInsideContainer: {
        flexDirection: 'column',
        gap: 0,
    },
    valueText: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center'
    },

    valueLabelContainer: {
    },

    valueLabelText: {
        fontSize: 18,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '31%',
        height: 60,
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
    },

    disabledBorder: {
        borderColor: Colors.gray600,
    },
    disabledText: {
        color: Colors.gray600,
    }
})