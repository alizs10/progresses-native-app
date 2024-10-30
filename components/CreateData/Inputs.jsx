import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Colors from '../../consts/Colors'
import Dropdown from '../Common/dropdown/Dropdown';
import ToggleSwitch from '../Common/form-inputs/ToggleSwitch';
import ColorPicker from '../NewRecord/popups/ColorPicker';
import ThemeInput from '../Common/form-inputs/ThemeInput';
import { useLabelStore } from '../../store/label-store';
import { useAppStore } from '../../store/app-store';
import DatePicker from '../Common/form-inputs/DatePicker';
import DynamicTextInputs from '../Common/form-inputs/DynamicTextInputs';
import CounterInput from '../Common/form-inputs/CounterInput';
import Input from '../Common/form-inputs/Input';
import CreateNewDataButton from '../Common/header/CreateNewDataButton';
import { zValidate } from '../../helpers/validation-helper';
import { progressSchema } from '../../database/validations/progress-validation';
import { useDataStore } from '../../store/data-store';
import Progress from '../../database/models/Progress';
import ProgressStep from '../../database/models/ProgressStep';
import Record from '../../database/models/Record';
import RecordManual from '../../database/models/RecordManual';
import { recordSchema } from '../../database/validations/record-validation';



export default function Inputs({ navigation }) {

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateNewDataButton onPress={handleCreateNewData} />
            )
        })

    }, [navigation]);

    const { addData } = useDataStore(state => state)

    const initialDataState = {
        name: '',
        label: 0,
        isStepsDefined: false,
        steps: [],
        importance: 0,
        theme: 'white',
        isDeadlineSet: false,
        deadline: new Date(Date.now()),
        isPinned: false,
        defineManualStep: false,
        manualStep: 1,
    }

    const [newDataType, setNewDataType] = useState('progress');

    function changeDataType(value) {
        setNewDataType(value)
        setNewData(initialDataState)
    }

    const [newData, setNewData] = useState(initialDataState);



    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateNewDataButton onPress={handleCreateNewData} />
            )
        })
    }, [newData])


    function handleAddStep() {
        setNewData(prevState => ({
            ...prevState,
            steps: [...prevState['steps'], { id: Math.floor(Math.random() * 10000), value: '' }]
        }))
    }

    function handleRemoveStep(id) {
        setNewData(prevState => ({ ...prevState, steps: prevState['steps'].filter(step => step.id !== id) }))
    }

    function handleCountUpStep() {
        if (newData.isStepsDefined) return
        setNewData(prevState => ({ ...prevState, steps: [...prevState['steps'], { id: Math.floor(Math.random() * 10000), value: '' }] }))
    }

    function handleCountDownStep() {
        if (newData.isStepsDefined) return
        setNewData(prevState => {
            let steps = [...prevState['steps']]
            steps.pop()
            return { ...prevState, steps }
        })
    }

    function handleChangeStep(id, val) {
        setNewData(prevState => ({ ...prevState, steps: prevState['steps'].map(step => step.id === id ? { id, value: val } : step) }))
    }


    function onThemeChange(theme) {
        setNewData({ ...newData, theme });
    }

    const toggleStepsSwitch = () => setNewData(prevState => ({ ...prevState, isStepsDefined: !prevState['isStepsDefined'] }));


    function handleDeadlineChange({ type }, dateValue) {
        setNewData(prevState => ({ ...prevState, deadline: dateValue }))
    }

    let minDate;

    let now = new Date(Date.now())
    minDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`


    const [isThemePickerVis, setIsThemePickerVis] = useState(false)

    function handleDeadlineSwitch() {
        setNewData(prevState => ({ ...prevState, isDeadlineSet: !prevState['isDeadlineSet'] }))
    }
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

    function handleManualStepSwitch() {
        setNewData(prevState => ({ ...prevState, defineManualStep: !prevState['defineManualStep'] }))
    }

    function handleCountUpManualStep() {
        setNewData(prevState => ({ ...prevState, manualStep: prevState['manualStep'] + 1 }))
    }

    function handleCountDownManualStep() {
        setNewData(prevState => ({ ...prevState, manualStep: prevState['manualStep'] > 2 ? prevState['manualStep'] - 1 : 1 }))
    }

    function handleCreateNewData() {

        // validate
        // console.log(newData.steps.length)

        let validationSchema = newDataType === 'progress' ? progressSchema : recordSchema;

        const { hasError, errors } = zValidate(validationSchema, newData)

        if (hasError) {
            console.log(errors)
            return
        }

        let newDataObj = newDataType === 'progress' ? new Progress(newData.name, newData.isPinned, newData.label, newData.deadline, newData.theme, newData.importance, newData.steps.map((step, index) => (new ProgressStep(step.value, false, index + 1)))) : !newData.defineManualStep ? new Record(newData.name, 0, newData.isPinned, newData.label, newData.theme, newData.importance) : new RecordManual(newData.name, 0, [0], newData.manualStep, newData.isPinned, newData.label, newData.theme, newData.importance)

        console.log(newDataObj)

        addData(newDataObj)
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>

            <ToggleSwitch
                value={newDataType}
                onChange={changeDataType}
                options={['progress', 'record']}
            />

            <Input
                value={newData.name}
                label={`${newDataType === 'progress' ? 'Progress' : 'Record'} name`}
                onChange={val => setNewData(prevState => ({ ...prevState, name: val }))}
                inputProps={{
                    placeholder: 'Name here',
                    placeholderTextColor: Colors.gray300
                }}
            />
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

            {newDataType === 'progress' && (
                <CounterInput
                    label={'Steps'}
                    value={newData.steps.length}
                    onUp={handleCountUpStep}
                    onDown={handleCountDownStep}
                    disabled={newData.isStepsDefined}
                />
            )}

            <ThemeInput selectedTheme={newData.theme} toggleThemePicker={toggleThemePicker} />

            <View style={styles.flexColumn}>

                {newDataType === 'record' && (
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Define Manual Step</Text>
                        <Switch
                            trackColor={{ false: 'white', true: Colors.green600 }}
                            thumbColor={newData.defineManualStep ? Colors.green500 : Colors.gray300}
                            onValueChange={handleManualStepSwitch}
                            value={newData.defineManualStep}
                        />
                    </View>
                )}

                {newData.defineManualStep && newDataType === 'record' && (
                    <CounterInput
                        label={'Step'}
                        value={newData.manualStep}
                        onUp={handleCountUpManualStep}
                        onDown={handleCountDownManualStep}
                        disabled={false}
                    />
                )}

                {newDataType === 'progress' && (
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Set a deadline</Text>
                        <Switch
                            trackColor={{ false: 'white', true: Colors.green600 }}
                            thumbColor={newData.isDeadlineSet ? Colors.green500 : Colors.gray300}
                            onValueChange={handleDeadlineSwitch}
                            value={newData.isDeadlineSet}
                        />
                    </View>
                )}
                {newDataType === 'progress' && newData.isDeadlineSet && (
                    <DatePicker
                        label={'Deadline'}
                        value={newData.deadline}
                        handleChange={handleDeadlineChange}
                        datePickerProps={{ minimumDate: new Date(minDate) }}
                    />
                )}

                {newDataType === 'progress' && (
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Define Steps</Text>
                        <Switch
                            trackColor={{ false: 'white', true: Colors.green600 }}
                            thumbColor={newData.isStepsDefined ? Colors.green500 : Colors.gray300}
                            onValueChange={toggleStepsSwitch}
                            value={newData.isStepsDefined}
                        />
                    </View>
                )}

                {newDataType === 'progress' && newData.isStepsDefined && (
                    <DynamicTextInputs
                        label={'Steps'}
                        onAddValue={handleAddStep}
                        onRemoveValue={handleRemoveStep}
                        onChangeValue={handleChangeStep}
                        values={newData.steps}
                    />
                )}
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
        // height: 1000,
        // height: 1000,
        // flexDirection: 'column',
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
    disabledInput: {
        borderWidth: 2,
        borderColor: Colors.gray600,
        borderRadius: 25,
        width: '100%',
        height: 60,
        paddingHorizontal: 25,
        fontSize: 16,
        color: Colors.gray600,
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

    },
    flexColumn: {
        flex: 1,
        // backgroundColor: 'blue',
        flexDirection: 'column',
        gap: 18
    }
})