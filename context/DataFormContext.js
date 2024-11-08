import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useDataStore } from "../store/data-store";
import { useNavigation } from "@react-navigation/native";
import CreateButton from "../components/Common/header/CreateButton";
import { useLabelStore } from "../store/label-store";
import { useAppStore } from "../store/app-store";
import UpdateButton from "../components/Common/header/UpdateButton";
import { progressSchema } from "../database/validations/progress-validation";
import { recordSchema } from "../database/validations/record-validation";
import { zValidate } from "../helpers/validation-helper";
import ProgressStep from "../database/models/ProgressStep";


export const DataFormContext = createContext({});

export function DataFormProvider({ children, mode, initState = null }) {

    const { addData, updateData } = useDataStore(state => state)

    const navigation = useNavigation()

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                mode === 'edit' ? <UpdateButton onPress={handleUpdateData} /> : <CreateButton onPress={handleCreateNewData} />
            )
        })

    }, [navigation]);

    const initialDataState = {
        name: initState?.name ?? '',
        label: initState?.label ?? 0,
        isStepsDefined: mode === 'edit' ? initState.type === 0 && true : false,
        steps: initState?.steps ? initState.steps.map(s => ({ id: s.id, value: s.name })) : [],
        importance: initState?.importance ?? 0,
        theme: initState?.theme ?? 'white',
        isDeadlineSet: initState?.hasDeadline ?? false,
        deadline: mode === 'edit' ? initState.deadline ?? Date.now() : Date.now(),
        isPinned: initState?.isPinned ?? false,
        defineManualStep: mode === 'edit' ? initState.type === 2 : false,
        manualStep: initState?.step ?? 1,
    }

    const [dataType, setDataType] = useState(initState?.type ?? 0);

    function changeDataType(value) {

        if (mode === 'edit') return

        setDataType(value)
        setDataInputs(initialDataState)
    }

    const [dataInputs, setDataInputs] = useState(initialDataState);

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                mode === 'edit' ? <UpdateButton onPress={handleUpdateData} /> : <CreateButton onPress={handleCreateNewData} />
            )
        })
    }, [dataInputs])


    function handleAddStep() {
        setDataInputs(prevState => ({
            ...prevState,
            steps: [...prevState['steps'], { id: Math.floor(Math.random() * 10000).toString(), value: '' }]
        }))
    }

    function handleRemoveStep(id) {
        setDataInputs(prevState => ({ ...prevState, steps: prevState['steps'].filter(step => step.id !== id) }))
    }

    function handleCountUpStep() {
        if (dataInputs.isStepsDefined) return
        setDataInputs(prevState => ({ ...prevState, steps: [...prevState['steps'], { id: Math.floor(Math.random() * 10000).toString(), value: '' }] }))
    }

    function handleCountDownStep() {
        if (dataInputs.isStepsDefined) return
        setDataInputs(prevState => {
            let steps = [...prevState['steps']]
            steps.pop()
            return { ...prevState, steps }
        })
    }

    function handleChangeStep(id, val) {
        setDataInputs(prevState => ({ ...prevState, steps: prevState['steps'].map(step => step.id === id ? { id, value: val } : step) }))
    }


    function onThemeChange(theme) {
        setDataInputs({ ...dataInputs, theme });
    }

    const toggleStepsSwitch = () => setDataInputs(prevState => ({ ...prevState, isStepsDefined: !prevState['isStepsDefined'] }));


    function handleDeadlineChange({ type }, dateValue) {
        setDataInputs(prevState => ({ ...prevState, deadline: dateValue }))
    }

    let minDate;

    let now = new Date(Date.now())
    minDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`


    const [isThemePickerVis, setIsThemePickerVis] = useState(false)

    function handleDeadlineSwitch() {
        setDataInputs(prevState => ({ ...prevState, isDeadlineSet: !prevState['isDeadlineSet'] }))
    }
    function toggleThemePicker() {
        setIsThemePickerVis(prevState => !prevState)
    }

    const labels = useLabelStore((state) => state.labels)
    const selectedLabelName = labels.find(label => label.id === dataInputs.label)?.name
    function onSelectLabel(labelId) {
        setDataInputs(prevState => ({ ...prevState, label: labelId }))
    }

    const importanceLevels = useAppStore((state) => state.importanceLevels)
    const selectedImportanceName = importanceLevels.find(imp => imp.id === dataInputs.importance)?.name
    function onSelectImportance(impId) {
        setDataInputs(prevState => ({ ...prevState, importance: impId }))
    }

    function handleManualStepSwitch() {
        if (mode === 'edit' && initState.type === 1) return
        setDataInputs(prevState => ({ ...prevState, defineManualStep: !prevState['defineManualStep'] }))
    }

    function handleCountUpManualStep() {
        setDataInputs(prevState => ({ ...prevState, manualStep: prevState['manualStep'] + 1 }))
    }

    function handleCountDownManualStep() {
        setDataInputs(prevState => ({ ...prevState, manualStep: prevState['manualStep'] > 2 ? prevState['manualStep'] - 1 : 1 }))
    }

    function handleCreateNewData() {

        // validate

        let validationSchema = dataType === 0 ? progressSchema : recordSchema;

        const { hasError, errors } = zValidate(validationSchema, dataInputs)

        if (hasError) {
            console.log(errors)
            return
        }

        let dataInputsObj = dataType === 0 ? new Progress(dataInputs.name, dataInputs.isPinned, dataInputs.label, dataInputs.deadline, dataInputs.theme, dataInputs.importance, dataInputs.steps.map((step, index) => (new ProgressStep(step.value, false, index + 1)))) : !dataInputs.defineManualStep ? new Record(dataInputs.name, 0, dataInputs.isPinned, dataInputs.label, dataInputs.theme, dataInputs.importance) : new RecordManual(dataInputs.name, 0, [0], dataInputs.manualStep, dataInputs.isPinned, dataInputs.label, dataInputs.theme, dataInputs.importance)

        addData(dataInputsObj)
        navigation.navigate('Home')
    }

    function handleUpdateData() {

        // validate
        let validationSchema = dataType === 0 ? progressSchema : recordSchema;

        const { hasError, errors } = zValidate(validationSchema, dataInputs)

        if (hasError) {
            console.log(errors)
            return
        }

        let updatedData = {
            ...initState,
            name: dataInputs.name,
            label: dataInputs.label,
            isPinned: dataInputs.isPinned,
            importance: dataInputs.importance,
            theme: dataInputs.theme,
            updatedAt: Date.now(),
        }


        if (initState.type === 0) {
            updatedData['deadline'] = dataInputs.deadline
            updatedData['hasDeadline'] = dataInputs.isDeadlineSet
            updatedData['steps'] = dataInputs.steps.map((step, index) => {
                let isExists = initState.steps.find(s => s.id === step.id)
                return new ProgressStep(step.value, isExists ? isExists.isCompleted : false, index + 1)
            })
        }


        if (initState.type === 2) {
            updatedData['step'] = dataInputs.manualStep
        }

        updateData(initState.id, updatedData)
        navigation.navigate('Home')
    }


    let values = {
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
        handleCreateNewData,
        mode
    }

    return (
        <DataFormContext.Provider value={values}>
            {children}
        </DataFormContext.Provider>
    )
}