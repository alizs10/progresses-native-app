import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../consts/Colors'
import Dropdown from '../Common/dropdown/Dropdown';
import ToggleSwitch from '../Common/form-inputs/ToggleSwitch';
import ColorPicker from '../NewRecord/popups/ColorPicker';
import ThemeInput from '../Common/form-inputs/ThemeInput';
import { useLabelStore } from '../../store/label-store';
import { useAppStore } from '../../store/app-store';

export default function Inputs() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const initialDataState = {
        title: '',
        label: null,
        importance: 1,
        steps: [],
        theme: 1,
        // isPinned: false,
        // isStep: false,
    }

    const [newData, setNewData] = useState(initialDataState);

    function onThemeChange(theme) {
        setNewData({ ...newData, theme });
    }

    const [isThemePickerVis, setIsThemePickerVis] = useState(false)

    function toggleThemePicker() {
        setIsThemePickerVis(prevState => !prevState)
    }

    const labels = useLabelStore((state) => state.labels)
    const selectedLabelName = labels.find(label => label.id === newData.label)?.name
    function onSelectLabel(labelId) {
        setNewData(prevState => ({ ...prevState, label: labelId }))
    }

    const importanceLevels = useAppStore((state) => state.importanceLevels)
    const selectedImportanceName = importanceLevels.find(imp => imp.id === newData.importance)?.name
    function onSelectImportance(impId) {
        setNewData(prevState => ({ ...prevState, importance: impId }))
    }

    return (
        <View style={styles.container}>

            <ToggleSwitch />

            <View style={styles.inputContainer}>
                <TextInput value='Read 1948 book' style={styles.input} />
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Title</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Dropdown
                    label={'Label'}
                    options={labels.map(label => ({ id: label.id, value: label.name }))}
                    onSelect={onSelectLabel}
                    value={newData.label}
                    valueInText={selectedLabelName}
                />
                <Dropdown
                    label={'Importance'}
                    options={importanceLevels.map(imp => ({ id: imp.id, value: imp.name }))}
                    onSelect={onSelectImportance}
                    value={newData.importance}
                    valueInText={selectedImportanceName}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput value='4' keyboardType='number-pad' style={styles.input} />
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Steps</Text>
                </View>
            </View>

            <ThemeInput selectedTheme={newData.theme} toggleThemePicker={toggleThemePicker} />

            <View>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Deadline</Text>
                    <Switch
                        trackColor={{ false: 'white', true: Colors.green600 }}
                        thumbColor={isEnabled ? Colors.green500 : Colors.gray300}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>



                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Define Steps</Text>
                    <Switch
                        trackColor={{ false: 'white', true: Colors.green600 }}
                        thumbColor={isEnabled ? Colors.green500 : Colors.gray300}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

            {isThemePickerVis && (
                <ColorPicker value={newData.theme} onChange={onThemeChange} onClose={toggleThemePicker} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 25,
        marginTop: 10,
        position: 'relative',
    },
    inputContainer: {
        position: 'relative',
        // backgroundColor: 'red',
    },
    input: {
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        width: '100%',
        height: 60,
        paddingHorizontal: 25,
        fontSize: 16,
        color: 'white',
        // backgroundColor: 'blue'
    },
    labelContainer: {
        position: 'absolute',
        top: 0,
        left: 16,
        transform: [{ translateY: -10 }],
    },

    label: {
        backgroundColor: Colors.gray800,
        color: Colors.gray300,
        width: 'auto',
        alignSelf: 'flex-start',
        fontSize: 12,
        paddingHorizontal: 6
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchLabel: {
        fontSize: 18,
        color: Colors.gray300
    },
    theme: {
        width: 50,
        height: 30,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: Colors.green600,
        backgroundColor: Colors.green500,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})