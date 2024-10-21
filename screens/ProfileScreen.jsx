import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../consts/Colors';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>


            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <AntDesign name="user" size={64} color={Colors.gray500} />
                </View>


                <View style={styles.flexRow}>
                    <Text style={styles.userFullNameText}>Ali ZS</Text>
                    <AntDesign name="edit" size={16} color={Colors.gray500} />
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.userEmailText}>Ali.text77@gmail.com</Text>
                    <AntDesign name="edit" size={16} color={Colors.gray500} />
                </View>

                <Text style={styles.logoutText}>Logout</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#343a40'
    },
    avatarContainer: {
        justifyContent: 'center',
        marginTop: 50,
        gap: 16
    },
    avatar: {
        padding: 20,
        borderWidth: 2,
        borderColor: Colors.gray700,
        borderRadius: 100,
        alignSelf: 'center'
    },
    userEmailText: {
        color: Colors.blue600,
        textAlign: 'center',
        fontSize: 18
    },
    logoutText: {
        color: Colors.red300,
        textAlign: 'center',
        fontSize: 18
    },
    userFullNameText: {
        color: Colors.gray300,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center'
    },

})