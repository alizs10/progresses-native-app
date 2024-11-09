import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../../../consts/Colors'
import { useEffect } from 'react';
import { useSnackStore } from '../../../store/snack-store';

export default function SnackbarContainer() {


    const { snack, visible, remove } = useSnackStore(state => state)

    useEffect(() => {
        let timer;

        if (visible) {
            timer = setTimeout(() => {
                remove()
            }, 5000)
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [visible, snack])

    return (
        <View style={styles.container}>
            {visible && (
                <View style={styles.snackbarContainer}>
                    <Text style={styles.snackbarText}>{snack.text}</Text>
                    {snack.action && (
                        <TouchableOpacity onPress={snack.action.cb} style={styles.snackbarButton}>
                            <Text style={styles.snackbarButtonText}>{snack.action.text}</Text>
                        </TouchableOpacity>
                    )}
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
        padding: 10,
    },
    snackbarButton: {
        padding: 10,
        borderRadius: 50,
    },
    snackbarButtonText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    }
})