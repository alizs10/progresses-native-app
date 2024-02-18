import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Menu() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress App <Text style={{ fontSize: 8 }}>by @alizs10</Text></Text>

            <View style={styles.menu}>
                <View style={styles.li}>

                    <MaterialCommunityIcons name="progress-clock" size={28} color='white' />
                    <Text style={styles.label}>Progresses</Text>

                </View>
            </View>

            <View style={styles.menu}>
                <Text style={styles.menuTitle}>Priorities</Text>

                <View style={styles.flexBetween}>

                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.red400} />
                        <Text style={styles.importanceLabel}>Important</Text>
                    </View>

                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>10</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.green500} />
                        <Text style={styles.importanceLabel}>Medium</Text>
                    </View>
                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>10</Text>
                    </View>
                </View>
                <View style={styles.flexBetween}>
                    <View style={styles.flexRow}>
                        <Entypo name="dot-single" size={28} color={Colors.blue500} />
                        <Text style={styles.importanceLabel}>Low</Text>
                    </View>
                    <View style={styles.priorityCount}>
                        <Text style={{ color: Colors.gray300, fontSize: 10 }}>10</Text>
                    </View>
                </View>
            </View>

            <View style={styles.menu}>

                <View style={styles.li}>
                    <MaterialCommunityIcons name="label-outline" size={26} color="white" />
                    <Text style={styles.label}>Tags</Text>
                </View>
                <View style={styles.li}>
                    <MaterialCommunityIcons name="trash-can-outline" size={26} color="white" />
                    <Text style={styles.label}>Trash</Text>
                </View>

                <View style={styles.li}>
                    <Ionicons name="settings-outline" size={26} color="white" />
                    <Text style={styles.label}>Settings</Text>
                </View>
                <View style={styles.li}>
                    <MaterialCommunityIcons name="information-outline" size={26} color="white" />
                    <Text style={styles.label}>About</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '85%',
        backgroundColor: Colors.gray800,
        zIndex: 300,
        elevation: 3,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

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
        paddingVertical: 12,
        paddingHorizontal: 20
    }
    ,
    menu: {
        gap: 18,
        borderTopWidth: 1,
        borderColor: Colors.gray700,
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