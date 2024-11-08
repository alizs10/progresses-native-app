import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import DataForm from '../components/Forms/DataForm'
import { DataFormProvider } from '../context/DataFormContext'

export default function EditDataScreen({ route, navigation }) {


    const { data } = route.params;

    console.log(data)

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <DataFormProvider initState={data} mode='edit'>
                    <DataForm />
                </DataFormProvider>
            </ScrollView>

            <StatusBar
                backgroundColor="transparent"
                barStyle="light-content"
                translucent={true}
                animated={true}
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