import { StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../consts/Colors'
import Dropdown from '../Common/Dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ToggleSwitch from '../Common/form-inputs/ToggleSwitch';

export default function Inputs() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


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
                <Dropdown label={'Label'} />
                <Dropdown label={'Importance'} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput value='4' keyboardType='number-pad' style={styles.input} />
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Steps</Text>
                </View>
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Theme</Text>

                <View style={styles.theme}>
                    <MaterialCommunityIcons name="palette-outline" size={16} color="white" />
                </View>
            </View>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 25,
        marginTop: 10
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