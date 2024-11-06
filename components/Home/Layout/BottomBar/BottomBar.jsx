import { View, StyleSheet, Text, Pressable } from 'react-native'
import Colors from '../../../../consts/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDataStore } from '../../../../store/data-store';
import { isProgressCompleted } from '../../../../helpers/data-helper';
import { useAppStore } from '../../../../store/app-store';

export default function BottomBar({ state, navigation }) {

    const { activeLabel, searchMode } = useAppStore(state => state);
    const { data, searchResults } = useDataStore(state => state);

    let showData = searchMode ? searchResults : data;

    showData = showData.filter(d => (d.deletedAt === null && d.label === activeLabel))
    const ufpCount = data.filter(d => d.type === 0 && !isProgressCompleted(d)).length;
    const fpCount = data.filter(d => d.type === 0 && isProgressCompleted(d)).length;
    const rCount = data.filter(d => [1, 2].includes(d.type)).length;



    const stackNavigation = useNavigation();

    function handlePressPlusButton() {
        stackNavigation.navigate('CreateData');
    }

    function handlePress(keyName) {
        const routes = state.routes;
        const route = routes.find(route => route.name === keyName);

        navigation.navigate(route.name);
    }

    return (
        <View style={styles.container}>
            <View style={styles.bottomBar}>

                <View style={styles.listBar}>

                    <Pressable onPress={() => handlePress('Home')}>
                        <View style={styles.itemContainer}>
                            <MaterialCommunityIcons name="home-outline" size={30} color={state.index === 0 ? Colors.green500 : Colors.gray400} />
                            {/* <View style={styles.itemCountContainer}>
                            <Text style={styles.itemCountText}>10</Text>
                        </View> */}
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('FinishedProgresses')}>
                        <View style={styles.itemContainer}>
                            <MaterialCommunityIcons name="progress-check" size={30} color={state.index === 1 ? Colors.green500 : Colors.gray400} />

                            <View style={styles.itemCountContainer}>
                                <Text style={styles.itemCountText}>{fpCount}</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('UnfinishedProgresses')}>
                        <View style={styles.itemContainer}>
                            <MaterialCommunityIcons name="progress-clock" size={30} color={state.index === 2 ? Colors.green500 : Colors.gray400} />
                            <View style={styles.itemCountContainer}>
                                <Text style={styles.itemCountText}>{ufpCount}</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('Records')}>
                        <View style={styles.itemContainer}>
                            <MaterialCommunityIcons name="star-shooting-outline" size={30} color={state.index === 3 ? Colors.green500 : Colors.gray400} />
                            <View style={styles.itemCountContainer}>
                                <Text style={styles.itemCountText}>{rCount}</Text>
                            </View>
                        </View>
                    </Pressable>


                </View>

                <Pressable onPress={handlePressPlusButton}>
                    <View style={[styles.plusButton]}>
                        <MaterialCommunityIcons name={'plus'} size={24} color='white' />
                    </View>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        gap: 8,
        position: 'relative',
        // backgroundColor: 'blue'
    },
    listBar: {
        backgroundColor: Colors.gray900,
        flexDirection: 'row',
        gap: 18,
        paddingHorizontal: 18,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
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
        position: 'relative',
    },
    itemCountContainer: {
        position: 'absolute',
        bottom: -6,
        right: -5,
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: Colors.gray400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCountText: {
        fontSize: 10,
        color: Colors.green600
    }
})