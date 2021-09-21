import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Alert, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'
import categoriesData from '../assets/data/categoriesData'
import popularData  from '../assets/data/popularData'

export default Home = () => {
    return (
        <View style={styles.container}>
            {/* Fejléc */}
            <SafeAreaView>
                <View style={styles.header}>

                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>

                   <Feather name="menu" size={24} colors={colors.textDark}/>
                </View>

            </SafeAreaView>

            {/* Címkék */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'

    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
        

    }
});