import { StyleSheet, Text, TextInput, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

export default function Input({ label, value, inputProps, onChange, error = null }) {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, error ? { borderColor: Colors.red500, color: Colors.red500 } : null]}
                    value={value}
                    onChangeText={onChange}
                    {...inputProps}
                    placeholderTextColor={error ? Colors.red500 : Colors.gray300}
                />
                <View style={styles.labelContainer}>
                    <Text style={[styles.label, error ? { color: Colors.red500 } : null]}>{label}</Text>
                </View>
            </View>
            {error && (
                <View style={styles.displayErrorContainer}>
                    <Entypo name="dot-single" size={18} color={Colors.red500} />
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
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
        // width: 200,
        height: 20,
        transform: [{ translateY: -10 }],
    },
    label: {
        backgroundColor: Colors.gray800,
        color: Colors.gray300,
        width: 'auto',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontSize: 14,
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