import { Pressable, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CloseButton({ onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View>
                <MaterialCommunityIcons name="close" size={24} color="white" />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})