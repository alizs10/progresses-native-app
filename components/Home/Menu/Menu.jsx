import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDataStore } from '../../../store/data-store';
import { useAppStore } from '../../../store/app-store';
import { isProgressCompleted } from '../../../helpers/data-helper';

export default function Menu() {

    const navigation = useNavigation()

    function goToScreen(screen) {
        navigation.navigate(screen)
    }

    let { searchMode } = useAppStore(state => state)
    let { data, searchResults } = useDataStore(state => state)

    let showData = searchMode ? searchResults : data;

    showData = showData.filter(prg => prg.deletedAt === null)

    let inProgressCount = showData.filter(d => (d.type === 0 && !isProgressCompleted(d))).length;
    let completedCount = showData.filter(d => (d.type === 0 && isProgressCompleted(d))).length;

    let recordsCount = showData.filter(d => [1, 2].includes(d.type)).length;

    let highDataCount = showData.filter(item => item.importance === 2).length
    let mediumDataCount = showData.filter(item => item.importance === 1).length
    let lowDataCount = showData.filter(item => item.importance === 0).length


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress App <Text style={{ fontSize: 8 }}>by @alizs10</Text></Text>

            <Pressable onPress={() => goToScreen('HomeWithDrawer')}>
                <View style={styles.menu}>
                    <View style={styles.li}>

                        <MaterialCommunityIcons name="progress-clock" size={28} color='white' />
                        <Text style={styles.label}>Progresses</Text>

                    </View>
                </View>
            </Pressable>

            <View style={styles.menu}>
                <Text style={styles.menuTitle}>Data Counts</Text>

                <View style={styles.flexBetween}>

                    <View style={[styles.flexRow, { gap: 12 }]}>
                        <MaterialCommunityIcons name="progress-clock" size={18} color={Colors.gray300} />
                        <Text style={styles.importanceLabel}>In progress</Text>
                    </View>

                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{inProgressCount}</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>

                    <View style={[styles.flexRow, { gap: 12 }]}>
                        <MaterialCommunityIcons name="progress-check" size={18} color={Colors.gray300} />
                        <Text style={styles.importanceLabel}>Completed</Text>
                    </View>

                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{completedCount}</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={[styles.flexRow, { gap: 12 }]}>
                        <MaterialCommunityIcons name="star-shooting-outline" size={18} color={Colors.gray300} />
                        <Text style={styles.importanceLabel}>Records</Text>
                    </View>
                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{recordsCount}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.menu}>
                <Text style={styles.menuTitle}>Priorities</Text>

                <View style={styles.flexBetween}>

                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.red400} />
                        <Text style={styles.importanceLabel}>High</Text>
                    </View>

                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{highDataCount}</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.green500} />
                        <Text style={styles.importanceLabel}>Medium</Text>
                    </View>
                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{mediumDataCount}</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.blue500} />
                        <Text style={styles.importanceLabel}>Low</Text>
                    </View>
                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>{lowDataCount}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menu}>

                <Pressable
                    onPress={() => goToScreen('Trashcan')}
                    style={styles.li}>
                    <MaterialCommunityIcons name="trash-can-outline" size={26} color="white" />
                    <Text style={styles.label}>Trash</Text>
                </Pressable>

                <Pressable onPress={() => goToScreen('Settings')}>
                    <View style={styles.li}>
                        <Ionicons name="settings-outline" size={26} color="white" />
                        <Text style={styles.label}>Settings</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => goToScreen('About')}>
                    <View style={styles.li}>
                        <MaterialCommunityIcons name="information-outline" size={26} color="white" />
                        <Text style={styles.label}>About</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // width: '85%',
        flex: 1,
        backgroundColor: Colors.gray800,
        zIndex: 300,
        elevation: 3,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 40,
    },
    flexRow: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
    ,
    menu: {
        gap: 18,
        borderTopWidth: 1,
        borderColor: Colors.gray900,
        padding: 20
    },
    li: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    label: {
        color: 'white',
        fontSize: 18
    },
    menuTitle: {
        fontSize: 14,
        color: Colors.gray500
    }
    ,
    importanceLabel: {
        fontSize: 16,
        color: Colors.gray300
    },
    priorityCount: {
        width: 25,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})