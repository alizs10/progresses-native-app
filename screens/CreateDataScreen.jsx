import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Inputs from '../components/CreateData/Inputs'
const screenHeight = Dimensions.get('window').height

export default function CreateDataScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Inputs navigation={navigation} />
                {/* <View style={styles.test}></View> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#343a40',
    },
    test: {
        height: 1000,
        backgroundColor: 'red'
    }
})