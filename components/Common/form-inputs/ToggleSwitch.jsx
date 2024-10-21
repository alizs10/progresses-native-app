import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../../../consts/Colors";

export default function ToggleSwitch() {

    const [value, setValue] = useState('progress')

    function onChange(modeVal) {
        setValue(modeVal)
    }


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Pressable style={styles.switchButtonOuterContainer} onPress={() => onChange('progress')}>
                    <View style={styles.switchButtonContainer}>
                        <Text style={[styles.switchButtonText, { color: value === 'progress' ? 'black' : 'white' }]}>Progress</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.switchButtonOuterContainer} onPress={() => onChange('record')}>
                    <View style={styles.switchButtonContainer}>
                        <Text style={[styles.switchButtonText, { color: value === 'record' ? 'black' : 'white' }]}>Record</Text>
                    </View>
                </Pressable>

                <View style={[styles.active, { left: value === 'progress' ? 0 : "50%" }]}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        borderWidth: 2,
        borderColor: Colors.gray300,
        borderRadius: 25,
        padding: 5
    },
    innerContainer: {
        borderRadius: 20,
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
    },
    switchButtonOuterContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    switchButtonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    switchButtonText: {
        fontSize: 16,
        fontWeight: "semibold",
        color: "white",
    },
    active: {
        position: "absolute",
        height: "100%",
        width: "50%",
        backgroundColor: Colors.gray500,
        zIndex: -1,
        borderRadius: 20,
    },

})