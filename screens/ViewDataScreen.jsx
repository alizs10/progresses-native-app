import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Progress from '../components/ViewData/Progress';
import { ColorSchemes } from '../consts/ColorSchemes';
import Record from '../components/ViewData/Record';
import RecordManual from '../components/ViewData/RecordManual';
import EditButton from '../components/Common/header/EditButton';

export default function CreateDataScreen({ route, navigation }) {

    const { data } = route.params;

    function handleEdit() {
        navigation.navigate('EditData', { data })
    }


    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <EditButton onPress={handleEdit} />
            ),
            title: `View ${data.type === 0 ? 'Progress' : 'Record'}`,
            headerStyle: {
                backgroundColor: ColorSchemes[data?.theme].bg,
            },
            headerTintColor: data.theme === 'white' ? 'black' : 'white'
        })

    }, [navigation]);


    return (
        <View style={[styles.container, { backgroundColor: ColorSchemes[data.theme].bg }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                {data.type === 0 ? <Progress progress={data} /> : data.type === 1 ? (<Record record={data} />) : (<RecordManual record={data} />)}



            </ScrollView>
            <StatusBar backgroundColor={ColorSchemes[data?.theme].bg} barStyle={data.theme === 'white' ? 'dark-content' : 'light-content'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: 'white',
    },
})