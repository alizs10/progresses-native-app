import { View, StyleSheet, ScrollView, BackHandler, ToastAndroid } from 'react-native'
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import Header from '../components/Home/Layout/Header/Header'
import Progresses from '../components/Home/Progresses/Progresses'
import Labels from '../components/Home/Layout/Labels/Labels'
import { useAppStore } from '../store/app-store'
import SelectModeHeader from '../components/Home/Layout/Header/SelectModeHeader'
import { DataSelectModeProvider } from '../context/DataSelectModeContext'
import { useFocusEffect } from '@react-navigation/native'

export default function HomeScreen({ navigation }) {

    const { selectMode } = useAppStore(state => state)

    const [scrollDirection, setScrollDirection] = useState('');
    const previousScrollY = useRef(0);

    const handleScroll = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;
        if (currentScrollY > previousScrollY.current) { setScrollDirection('down'); }
        else if (currentScrollY < previousScrollY.current) {
            setScrollDirection('up');
        }
        previousScrollY.current = currentScrollY;
    };

    useLayoutEffect(() => {

        console.log(scrollDirection)

    }, [scrollDirection])



    useFocusEffect(
        useCallback(() => {
            let backPressedOnce = false;

            const backAction = () => {

                if (backPressedOnce) {
                    BackHandler.exitApp()

                } else {
                    backPressedOnce = true;
                    ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT)

                    setTimeout(() => {
                        backPressedOnce = false;
                    }, 2000)
                }

                return true;
            }

            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

            return () => {
                backHandler.remove()
            };
        }, [])
    );


    return (

        <View style={styles.container}>
            {!selectMode ? (
                <Header scrollDir={scrollDirection} />
            ) : (<SelectModeHeader />)}

            <ScrollView
                onScroll={handleScroll}
                style={{ flex: 1, position: 'relative', paddingTop: 110 }}>

                <Labels />

                <DataSelectModeProvider>
                    <Progresses />
                </DataSelectModeProvider>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        position: 'relative'
    }
})