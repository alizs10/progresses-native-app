import { ScrollView, StyleSheet, View } from 'react-native'
import FormData from '../components/Forms/DataForm';
import { DataFormProvider } from '../context/DataFormContext';

export default function CreateDataScreen() {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <DataFormProvider>
                    <FormData />
                </DataFormProvider>
            </ScrollView>
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