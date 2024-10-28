import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../../consts/Colors'
import Button from '../Button'
import CloseButton from '../CloseButton'

export default function DynamicTextInputs({ label, values, onAddValue, onRemoveValue, onChangeValue }) {

    return (
        <View style={styles.container}>
            <View style={styles.flexBetween}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.label}>{values.length}</Text>
            </View>

            <View style={styles.stepsContainer}>
                {values.map(value => (
                    <View key={value.id} style={styles.stepInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={value.value}
                            placeholder={`Enter ${label}`}
                            placeholderTextColor={Colors.gray300}
                            onChangeText={val => onChangeValue(value.id, val)}
                        />
                        <View style={styles.xContainer}>
                            <CloseButton onPress={() => onRemoveValue(value.id)} />
                        </View>
                    </View>
                ))}
            </View>

            <Button onPress={onAddValue} text={'Add New Step'} />
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 500,
        // flexDirection: 'column',
        gap: 10,
        alignContent: 'flex-start'
        // backgroundColor: Colors.gray800,
    },
    stepsContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    stepInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: Colors.gray300,
    },
    label: {
        fontSize: 18,
        color: Colors.gray300
    },
    input: {
        width: '85%',
        height: 40,
        paddingHorizontal: 8,
        fontSize: 16,
        color: 'white',
        // backgroundColor: 'blue'
    },
    xContainer: {
        width: '15%',
        alignItems: 'flex-end',
    }
})