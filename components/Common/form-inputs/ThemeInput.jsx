import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../consts/Colors';

export default function ThemeInput({ toggleThemePicker, selectedTheme }) {

    const themeColors = {
        white: {
            border: 'white',
            bg: Colors.gray300,
            text: 'black'
        },
        violet: {
            border: Colors.violet800,
            bg: Colors.violet900,
            text: 'white'
        },
        blue: {
            border: Colors.blue800,
            bg: Colors.blue900,
            text: 'white'
        },
        yellow: {
            border: Colors.yellow700,
            bg: Colors.yellow900,
            text: 'black'
        },
        turquoise: {
            border: Colors.turquoise700,
            bg: Colors.turquoise900,
            text: 'white'

        },
        red: {
            border: Colors.red700,
            bg: Colors.red900,
            text: 'white'
        },
    }

    function getThemeName(themeType) {
        switch (themeType) {
            case 1:
                return "white"
                break;
            case 2:
                return "yellow"
                break;
            case 3:
                return "red"
                break;
            case 4:
                return "violet"
                break;
            case 5:
                return "turquoise"
                break;
            case 6:
                return "blue"
                break;

            default:
                return "white"
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Theme</Text>

            <Pressable onPress={toggleThemePicker} style={[styles.theme, { backgroundColor: themeColors[selectedTheme].bg, borderColor: themeColors[selectedTheme].border }]}>
                <MaterialCommunityIcons name="palette-outline" size={16} color={themeColors[selectedTheme].text} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: Colors.gray800,
        width: 'auto',
        alignSelf: 'flex-start',
        fontSize: 18,
        color: Colors.gray300,
        paddingHorizontal: 6
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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