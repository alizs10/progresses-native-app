import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MiniRecord() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <MaterialCommunityIcons name="star-shooting" size={14} color={Colors.gray700} />
                    <Text style={styles.title}>Not Smoking</Text>
                </View>
                <MaterialIcons name="push-pin" size={18} color={Colors.gray700} />
            </View>

            <View style={styles.bottomContainer}>



                <View style={styles.flexColumn}>

                    <View style={styles.flexRow}>
                        <Text style={{ fontSize: 24, color: Colors.green600 }}>11</Text>
                    </View>

                    <View style={styles.flexRow}>
                        <MaterialCommunityIcons name="clock-time-ten-outline" size={14} color={Colors.gray600} />
                        <Text style={{ fontSize: 10, color: Colors.gray600 }}>last update: today</Text>
                    </View>

                    <View style={styles.flexBetween}>

                        <View style={[styles.flexRow, { alignSelf: 'flex-end' }]}>
                            <View style={styles.labelTag}>
                                <Text style={{ color: 'white', fontSize: 10 }}>Work</Text>
                            </View>
                            <View style={styles.importanceTag}>
                                <Text style={{ color: 'white', fontSize: 10 }}>M</Text>
                            </View>
                        </View>


                        <View style={styles.checkButton}>
                            <MaterialCommunityIcons name="plus" size={22} color={Colors.green600} />
                        </View>

                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        borderWidth: 2,
        borderColor: Colors.gray500,
        backgroundColor: Colors.gray300,
        borderRadius: 20,
        flex: 1
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 14,
        color: Colors.gray700,
        fontWeight: 'bold',
    },
    bottomContainer: {
        marginTop: 8,
    },

    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 4
    },
    flexColumn: {
        flexDirection: 'column',
        gap: 8,
    },
    flexBetween: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    checkButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 2,
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    labelTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.gray500,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    importanceTag: {
        textAlign: 'center',
        alignSelf: 'flex-start',
        backgroundColor: Colors.green500,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
})