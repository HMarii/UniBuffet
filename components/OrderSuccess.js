import React from 'react'
import {View, Text, StyleSheet, Image,  TouchableOpacity, ScrollView, SafeAreaView, ImageBackground} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors'

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <ImageBackground source={require('../assets/images/fun.jpg')} style={{width: '100%', height: '100%'}}>

                        <SafeAreaView>
                            <View style={styles.header}>
                                <Image source={require('../assets/images/wolfprofile.png')} style={styles.profileImage}/>
                            </View>
                        </SafeAreaView>

                        <View style={styles.titlesWrapper}>
                            <Text style={styles.titlesTitle}>Sikeres Rendelés</Text>
                            <Text style={styles.titlesTitle}>Rendelj még fincsi ételeket</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
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
    },
    titlesWrapper: {
        marginTop: 100,
        paddingHorizontal: 10,
        paddingTop: 410
        
    },
    titlesTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 20,
        color: colors.textDark,
        marginBottom: 70,
        textAlign: 'center'
    },
});