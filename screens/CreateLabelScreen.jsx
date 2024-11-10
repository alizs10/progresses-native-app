import { StyleSheet, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Input from '../components/Common/form-inputs/Input'
import Colors from '../consts/Colors'
import CreateButton from '../components/Common/header/CreateButton';
import { useLabelStore } from '../store/label-store';
import { isLabelExists } from '../helpers/data-helper';
import Label from '../database/models/Label';
export default function CreateLabelScreen({ navigation }) {

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateButton onPress={handleCreateNewLabel} />
            )
        })

    }, [navigation]);

    const [name, setName] = useState('')
    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateButton onPress={handleCreateNewLabel} />
            )
        })

    }, [name]);


    const { labels, addLabel } = useLabelStore(state => state)

    function handleCreateNewLabel() {

        if (name.trim() === '') {
            setErrors(prevState => ({ ...prevState, name: 'Label name is required' }))
            return
        }


        if (isLabelExists(labels, name.trim())) {
            setErrors(prevState => ({ ...prevState, name: 'Label already exists' }))
            return;
        };

        // clear all errors
        setErrors(initErrors)

        let newLabelObj = new Label(name.trim())
        addLabel(newLabelObj)
        navigation.goBack()
    }

    const initErrors = {
        name: ''
    }
    const [errors, setErrors] = useState(initErrors)

    return (
        <View style={styles.container}>
            <Input
                value={name}
                label={'Label Name'}
                onChange={val => setName(val)}
                inputProps={{
                    placeholder: 'Label Name here',
                    placeholderTextColor: Colors.gray300
                }}
                error={errors.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#0F1012',
    },
})