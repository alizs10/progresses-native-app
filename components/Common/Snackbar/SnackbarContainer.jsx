import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../consts/Colors'
import useSnackbar from '../../../hooks/useSnackbar'
import { useEffect } from 'react';
import { useSnackStore } from '../../../store/snack-store';

export default function SnackbarContainer() {


    const { snack, visible, remove } = useSnackStore(state => state)

    useEffect(() => {

        if (visible) {
            setTimeout(() => {
                remove()
            }, 5000)
        }

    }, [visible])


    return (
        <View style={styles.container}>
            {visible && (
                <View style={styles.snackbarContainer}>
                    <Text style={styles.snackbarText}>{snack.text}</Text>
                    <TouchableOpacity onPress={snack.action.cb} style={styles.snackbarButton}>
                        <Text style={styles.snackbarButtonText}>{snack.action.text}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 100,
        left: 20,
        right: 20,
        zIndex: 1000,
    },
    snackbarContainer: {
        backgroundColor: Colors.gray700,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 2,
    },
    snackbarText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    snackbarButton: {
        padding: 10,
        borderRadius: 5,
    },
    snackbarButtonText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    }
})