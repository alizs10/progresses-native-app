import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Layout/Header/Header'
import Progresses from '../components/Home/Progresses/Progresses'
import Labels from '../components/Home/Layout/Labels/Labels'
import BottomBar from '../components/Home/Layout/BottomBar/BottomBar'
import Menu from '../components/Home/Menu/Menu'
import { useAppStore } from '../store/app-store'
import SelectModeHeader from '../components/Home/Layout/Header/SelectModeHeader'

export default function HomeScreen() {

    const { selectMode } = useAppStore(state => state)

    return (
        <View style={{ flex: 1, position: 'relative' }}>

            <View style={styles.container}>
                {!selectMode ? (
                    <Header />
                ) : (<SelectModeHeader />)}
                <Labels />
                <Progresses />
                {/* <Menu /> */}

            </View>
            {/* <BottomBar /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    }
})