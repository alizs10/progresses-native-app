import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function DrawerHeader({ headerRight, headerLeftIcon, headerLeftPress, title }) {

    const navigation = useNavigation()

    const routeIndex = useNavigationState((state) => state.index)
    const routeNames = useNavigationState((state) => state.routeNames)
    const currentRouteName = routeNames[routeIndex]


    function openDrawer() {
        navigation.openDrawer();
    }


    return (
        <View style={styles.container}>

            <View style={styles.header}>


                <Pressable style={styles.button} onPress={headerLeftPress ? headerLeftPress : openDrawer}>
                    <View>
                        {headerLeftIcon ? (headerLeftIcon) : (
                            <Ionicons name="menu" size={28} color="white" />
                        )}
                    </View>
                </Pressable>

                <Text style={styles.title}>{title ? title : currentRouteName}</Text>
            </View>

            {headerRight() && headerRight()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        zIndex: 100,
        height: 100,
        backgroundColor: '#0F1012',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 30
    },
    header: {
        flex: 1,
        // paddingHorizontal: 20,
        // paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        padding: 10,
        marginLeft: 20,
        // backgroundColor: 'red'
    }
})