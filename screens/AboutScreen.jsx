import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                By constantly remembering Long/short-term life goals and creating a feeling of pleasure by reaching them, you can actually improve your lifestyle.
            </Text>

            <Text style={styles.text}>
                This project was developed using React Native and some other libraries to bring a wonderful UI and UX. it's easy to use thanks to the support of different gestures.
            </Text>

            <View>

                <Text style={styles.text}>
                    Developer: @alizs10
                </Text>
                <Text style={styles.text}>
                    App Version: 0.0.1
                </Text>
                <Text style={styles.text}>
                    Copyright © 2024 All rights reserved
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#0F1012',
        paddingHorizontal: 20,
        paddingVertical: 12,
        flexDirection: 'column',
        gap: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'semibold',
        textAlign: 'justify',
        lineHeight: 28,
    }
})