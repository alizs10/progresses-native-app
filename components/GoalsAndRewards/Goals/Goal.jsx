import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../../consts/Colors'
import { Feather } from '@expo/vector-icons';

export default function Goal() {
    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Text style={styles.title}>First Goal</Text>

                <View style={styles.prizeButton}>
                    <Text style={styles.prizeButtonText}>Get Prize</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>

                <View style={styles.progressesContainer}>
                    <View style={styles.progressItem}>
                        <Feather name="check-circle" size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>First Progress</Text>
                    </View>
                    <View style={styles.progressItem}>
                        <Feather name="check-circle" size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>First Progress</Text>
                    </View>
                    <View style={styles.progressItem}>
                        <Feather name="check-circle" size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>First Progress</Text>
                    </View>
                    <View style={styles.progressItem}>
                        <Feather name="circle" size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>First Progress</Text>
                    </View>

                </View>
                <View style={styles.flexSpaceBetween}>
                    <View style={styles.fraction}>
                        <Text style={{ color: Colors.gray700, fontSize: 12 }}>3/4</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 24 }}>75 <Text style={{ color: 'white', fontSize: 12 }}>%</Text></Text>
                    </View>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progress}>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderWidth: 3,
        borderColor: Colors.violet800,
        borderRadius: 25,
        backgroundColor: Colors.violet600,
        zIndex: 1,
        overflow: 'hidden'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    prizeButton: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 50,
        backgroundColor: Colors.yellow400,
        elevation: 2,
    },
    prizeButtonText: {
        fontSize: 12,
        color: Colors.gray800,
    },
    bottomContainer: {
        gap: 8,
        marginTop: 10
    },
    progressContainer: {
        height: 10,
        width: '100%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden'
    },

    progress: {
        width: '75%',
        backgroundColor: 'white',
        height: '100%'
    },
    flexSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    fraction: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 2,
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        alignItems: 'center',
        elevation: 1
    },
    progressesContainer: {
        gap: 4
    },
    progressItem: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    }
})