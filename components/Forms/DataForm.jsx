import { StyleSheet, Switch, Text, View } from 'react-native'
import Colors from '../../consts/Colors'
import Dropdown from '../Common/dropdown/Dropdown';
import ToggleSwitch from '../Common/form-inputs/ToggleSwitch';
import ColorPicker from '../NewRecord/popups/ColorPicker';
import ThemeInput from '../Common/form-inputs/ThemeInput';
import DatePicker from '../Common/form-inputs/DatePicker';
import DynamicTextInputs from '../Common/form-inputs/DynamicTextInputs';
import CounterInput from '../Common/form-inputs/CounterInput';
import Input from '../Common/form-inputs/Input';
import { useContext } from 'react';
import { DataFormContext } from '../../context/DataFormContext';
import { useLabelStore } from '../../store/label-store';
import { useAppStore } from '../../store/app-store';
import Entypo from '@expo/vector-icons/Entypo';



export default function DataForm() {

    const labels = useLabelStore((state) => state.labels)
    const importanceLevels = useAppStore((state) => state.importanceLevels)


    const {
        dataInputs,
        setDataInputs,
        dataType,
        changeDataType,
        handleAddStep,
        handleRemoveStep,
        handleCountUpStep,
        handleCountDownStep,
        handleChangeStep,
        onThemeChange,
        toggleStepsSwitch,
        handleDeadlineChange,
        handleDeadlineSwitch,
        toggleThemePicker,
        isThemePickerVis,
        minDate,
        onSelectLabel,
        selectedLabelName,
        onSelectImportance,
        selectedImportanceName,
        handleManualStepSwitch,
        handleCountUpManualStep,
        handleCountDownManualStep,
        mode,
        errors
    } = useContext(DataFormContext)

    return (
        <View style={styles.container}>

            {mode !== 'edit' && (
                <ToggleSwitch
                    value={dataType === 2 ? 1 : dataType}
                    onChange={changeDataType}
                    options={['progress', 'record']}
                />
            )}

            <Input
                value={dataInputs.name}
                label={`${dataType === 0 ? 'Progress' : 'Record'} name`}
                onChange={val => setDataInputs(prevState => ({ ...prevState, name: val }))}
                inputProps={{
                    placeholder: 'Name here',
                    placeholderTextColor: Colors.gray300
                }}
                error={errors.name}
            />

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Dropdown
                    label={'Label'}
                    options={labels.map(label => ({ id: label.id, value: label.name }))}
                    onSelect={onSelectLabel}
                    value={dataInputs.label}
                    valueInText={selectedLabelName}
                    error={errors.label}
                />
                <Dropdown
                    label={'Importance'}
                    options={importanceLevels.map(imp => ({ id: imp.id, value: imp.name }))}
                    onSelect={onSelectImportance}
                    value={dataInputs.importance}
                    valueInText={selectedImportanceName}
                    error={errors.importance}
                />
            </View>

            {dataType === 0 && (
                <CounterInput
                    label={'Steps'}
                    value={dataInputs.steps.length}
                    onUp={handleCountUpStep}
                    onDown={handleCountDownStep}
                    disabled={dataInputs.isStepsDefined}
                    error={errors.steps}
                />
            )}

            <ThemeInput selectedTheme={dataInputs.theme} toggleThemePicker={toggleThemePicker} />

            <View style={styles.flexColumn}>

                {((mode !== 'edit' && [1, 2].includes(dataType)) || (mode === 'edit' && dataType === 2)) && (
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Define Manual Step</Text>
                        <Switch
                            trackColor={{ false: 'white', true: Colors.green600 }}
                            thumbColor={dataInputs.defineManualStep ? Colors.green500 : Colors.gray300}
                            onValueChange={handleManualStepSwitch}
                            value={dataInputs.defineManualStep}
                        />
                    </View>
                )}

                {((mode !== 'edit' && [1, 2].includes(dataType) && dataInputs.defineManualStep) || (mode === 'edit' && dataType === 2 && dataInputs.defineManualStep)) && (
                    <CounterInput
                        label={'Step'}
                        value={dataInputs.manualStep}
                        onUp={handleCountUpManualStep}
                        onDown={handleCountDownManualStep}
                        disabled={false}
                        error={errors.manualStep}
                    />
                )}

                {dataType === 0 && (
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Set a deadline</Text>
                        <Switch
                            trackColor={{ false: 'white', true: Colors.green600 }}
                            thumbColor={dataInputs.isDeadlineSet ? Colors.green500 : Colors.gray300}
                            onValueChange={handleDeadlineSwitch}
                            value={dataInputs.isDeadlineSet}
                        />
                    </View>
                )}
                {dataType === 0 && dataInputs.isDeadlineSet && (
                    <DatePicker
                        label={'Deadline'}
                        value={new Date(dataInputs.deadline)}
                        handleChange={handleDeadlineChange}
                        datePickerProps={{ minimumDate: new Date(minDate) }}
                        error={errors.deadline}
                    />
                )}

                {dataType === 0 && (
                    <View>
                        <View style={styles.switchContainer}>
                            <Text style={[styles.switchLabel, dataInputs.isStepsDefined && errors.steps ? { color: Colors.red500 } : {}]}>Define Steps</Text>
                            <Switch
                                trackColor={{ false: 'white', true: Colors.green600 }}
                                thumbColor={dataInputs.isStepsDefined ? Colors.green500 : Colors.gray300}
                                onValueChange={toggleStepsSwitch}
                                value={dataInputs.isStepsDefined}
                            />
                        </View>
                        {dataInputs.isStepsDefined && errors.steps && (
                            <View style={styles.displayErrorContainer}>
                                <Entypo name="dot-single" size={18} color={Colors.red500} />
                                <Text style={styles.errorText}>{errors.steps}</Text>
                            </View>
                        )}
                    </View>
                )}

                {dataType === 0 && dataInputs.isStepsDefined && (
                    <DynamicTextInputs
                        label={'Steps'}
                        onAddValue={handleAddStep}
                        onRemoveValue={handleRemoveStep}
                        onChangeValue={handleChangeStep}
                        values={dataInputs.steps}
                    />
                )}
            </View>

            {isThemePickerVis && (
                <ColorPicker value={dataInputs.theme} onChange={onThemeChange} onClose={toggleThemePicker} />
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
    },
    displayErrorContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 16,
    },
    errorText: {
        color: Colors.red500,
        fontSize: 14,
    }
})