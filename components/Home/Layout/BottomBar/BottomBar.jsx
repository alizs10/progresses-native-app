import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomBar() {
    return (
        <View style={styles.container}>
            <View style={styles.bottomBar}>

                <View style={styles.listBar}>
                    <View style={styles.itemContainer}>
                        <MaterialCommunityIcons name="home-outline" size={28} color={Colors.green500} />
                        {/* <View style={styles.itemCountContainer}>
                            <Text style={styles.itemCountText}>10</Text>
                        </View> */}
                    </View>
                    <View style={styles.itemContainer}>
                        <MaterialCommunityIcons name="progress-check" size={28} color={Colors.gray300} />

                        <View style={styles.itemCountContainer}>
                            <Text style={styles.itemCountText}>33</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <MaterialCommunityIcons name="progress-clock" size={28} color={Colors.gray300} />
                        <View style={styles.itemCountContainer}>
                            <Text style={styles.itemCountText}>2</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <MaterialCommunityIcons name="star-shooting-outline" size={28} color={Colors.gray300} />
                        <View style={styles.itemCountContainer}>
                            <Text style={styles.itemCountText}>8</Text>
                        </View>
                    </View>


                </View>
                <View style={styles.plusButton}>
                    <MaterialCommunityIcons name="plus" size={24} color='white' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        height: 55,
        alignSelf: 'center',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        gap: 8
    },
    listBar: {
        backgroundColor: Colors.gray600,
        flexDirection: 'row',
        gap: 14,
        paddingHorizontal: 14,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 23,
        elevation: 1
    },
    plusButton: {
        backgroundColor: Colors.green600,
        padding: 10,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 55,
        elevation: 1
    },
    itemContainer: {
        position: 'relative'
    },
    itemCountContainer: {
        position: 'absolute',
        bottom: -6,
        right: -5,
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: Colors.gray300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCountText: {
        fontSize: 10,
        color: Colors.green600
    },
})