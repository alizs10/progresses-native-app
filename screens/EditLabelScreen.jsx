import { StyleSheet, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Input from '../components/Common/form-inputs/Input'
import Colors from '../consts/Colors'
import UpdateButton from '../components/Common/header/UpdateButton';
import { useLabelStore } from '../store/label-store';
import { isLabelExists } from '../helpers/data-helper';

export default function EditLabelScreen({ route, navigation }) {

    const { data } = route.params;

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <UpdateButton onPress={handleUpdateLabel} />
            )
        })

    }, [navigation]);

    const [name, setName] = useState(data.name)

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <UpdateButton onPress={handleUpdateLabel} />
            )
        })

    }, [name]);


    const { labels, updateLabel } = useLabelStore(state => state)

    function handleUpdateLabel() {

        if (name.trim() === '') return;

        if (isLabelExists(labels, name.trim(), data.name)) {
            console.log('Label already exists')
            return;
        };

        let updatedLabel = {
            ...data,
            name: name.trim()
        }

        updateLabel(data.id, updatedLabel)
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