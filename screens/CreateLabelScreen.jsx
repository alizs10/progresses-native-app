import { StyleSheet, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Input from '../components/Common/form-inputs/Input'
import Colors from '../consts/Colors'
import CreateNewLabelButton from '../components/Common/header/CreateNewLabelButton';
import { useLabelStore } from '../store/label-store';
import { isLabelExists } from '../helpers/data-helper';
import Label from '../database/models/Label';
export default function CreateLabelScreen({ navigation }) {

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateNewLabelButton onPress={handleCreateNewLabel} />
            )
        })

    }, [navigation]);

    const [name, setName] = useState('')
    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <CreateNewLabelButton onPress={handleCreateNewLabel} />
            )
        })

    }, [name]);


    const { labels, addLabel } = useLabelStore(state => state)

    function handleCreateNewLabel() {

        if (name.trim() === '') return;

        if (isLabelExists(labels, name.trim())) {
            console.log('Label already exists')
            return;
        };

        let newLabelObj = new Label(name.trim())
        addLabel(newLabelObj)
        navigation.goBack()
    }
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