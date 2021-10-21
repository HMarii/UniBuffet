import React from 'react'
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, TextInput} from 'react-native'
export default OrderDetails = ({ navigation }) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Neptun kód"></TextInput>
                <TextInput placeholder="*****"></TextInput>
            </View>
        </View>
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'

    }
})
