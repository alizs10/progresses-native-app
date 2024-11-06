import { View, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../../consts/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useSearch from '../../../../hooks/useSearch';
import { useAppStore } from '../../../../store/app-store';
import { useDataStore } from '../../../../store/data-store';

export default function Header({ scrollDir }) {

    const [searchInputFocused, setSearchInputFocused] = useState(false);

    const navigation = useNavigation();

    const changeScreen = (screenName) => {
        navigation.navigate(screenName);
    }

    function openDrawer() {
        setSearchInputFocused(false)

        navigation.openDrawer();
    }

    const { searchMode, setSearchMode } = useAppStore(state => state)
    const { searchData } = useDataStore(state => state)

    const [searchStr, setSearchStr] = useSearch(handleSearch);

    function handleSearch() {
        searchData(searchStr);
        setSearchMode(true)
    }

    function handleCloseSearch() {
        setSearchMode(false);
        setSearchStr('');
        setSearchInputFocused(false)
    }
    useEffect(() => {

        if (!searchInputFocused) {
            Keyboard.dismiss()
        }

    }, [searchInputFocused])

    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <View style={[styles.flexRow, { flex: 3 }]}>

                    <Pressable onPress={openDrawer}>
                        <View>
                            <Ionicons name="menu" size={28} color="white" />
                        </View>
                    </Pressable>
                    <TextInput
                        value={searchStr}
                        onChangeText={val => setSearchStr(val)}
                        onFocus={() => setSearchInputFocused(true)}
                        onBlur={() => setSearchInputFocused(false)}
                        style={styles.searchInput} multiline={false} placeholderTextColor={Colors.gray300} placeholder='Search Progresses' />
                </View>
                <View style={[styles.flexRow, { flex: 1, justifyContent: 'flex-end' }]}>

                    {(searchInputFocused || searchMode) ? (
                        <Pressable onPress={handleCloseSearch}>
                            <Ionicons name="close" size={24} color="white" />
                        </Pressable>
                    ) : (
                        <>
                            <Pressable onPress={() => changeScreen('Goals')}>
                                <Feather name="target" size={24} color={Colors.yellow200} />
                            </Pressable>
                            <Pressable onPress={() => changeScreen('Profile')}>
                                <AntDesign name="user" size={24} color="white" />
                            </Pressable>
                        </>
                    )}

                </View>
            </View>
        </View>
    )
}
// , scrollDir === 'up' ? styles.stickyHeaderContainer : null
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 20,
        left: 20,
        height: 60,
        marginTop: 40,
        zIndex: 100,
    },
    header: {
        flex: 1,
        backgroundColor: Colors.gray900,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2
    },
    stickyHeaderContainer: {
        position: 'absolute',
        top: 50,
        left: 10,
        right: 10
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    searchInput: {
        color: 'white',
        flex: 1,
        fontSize: 14
    }
})