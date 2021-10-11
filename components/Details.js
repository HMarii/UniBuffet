import React from 'react'
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors';
export default Details = ({ route, navigation }) => {

    const { item } = route.params;
    return (
        <View style={styles.container}>
            {/* Fejléc */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark}>
                            </Feather>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons 
                            name="star"
                            size={12}
                            color={colors.white}
                        />
                    </View>
                </View>
            </SafeAreaView>

            {/* Címkék */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titleText}>
                    {item.title}
                </Text>

            </View>
            {/* Árak */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>
                        {item.price + " HUF"}
                </Text>
            </View>
        </View>
    );
};

const styles = new StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,


    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
    },
    priceWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,

    },
    priceText: {
        color: colors.price,
        fontFamily: 'MontSerrat-Bold',
        fontSize: 32,
    }
})
