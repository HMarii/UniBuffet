import React from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors'
import categoriesData from '../assets/data/categoriesData'
import popularData  from '../assets/data/popularData'

export default Home = () => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={styles.categoryItemWrapper}>
                <Image source={item.image} style={styles.categoryItemImage}></Image>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={styles.categorySelectWrapper}>
                    <Feather name="chevron-right" size={8} style={styles.categorySelectIcon}></Feather>
                </View>
            </View>
        );
    };


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
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Étel</Text>
                <Text style={styles.titlesTitle}>Kiszállítás</Text>
            </View>

            {/* Keresés */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark}></Feather>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Keresés...</Text>
                </View>
            </View>

            {/* Kategóriák */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Kategóriák</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
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
    },

    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    titlesSubtitle: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        color: colors.textDark,
    },

    titlesTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },

    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },

    search: {
        flex: 1, /* A képernyő teljes szélességét kitölti*/
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },

    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },

    categoriesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,

    },

    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    categoryItemWrapper: {
        backgroundColor: colors.textLight
    },

    categorySelectIcon: {

    },

    categorySelectWrapper: {

    },

    categoryItemTitle: {

    },

    categoryItemImage: {

    },

});