import React from 'react'
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, FlatList} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/colors/colors';
export default Details = ({ route, navigation }) => {

    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientsItemWrapper , {
                marginLeft: item.id === '1' ? 20 : 0
            }
            
            ]}>
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        )
    }
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

            {/* Info */}
            <View style={styles.infoWrapper}>
                <View styles={styles.leftInfoWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Méret</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber} cm</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Várható kiszállítás</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime} perc</Text>
                    </View>
                </View>

                <View styles={styles.rightInfoWrapper}>
                    <Image source={item.image} styles={styles.itemImage}/>
                </View>
            </View>

            {/* Hozzávalók */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Hozzávalók</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList 
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Megrendelés Gomb */}
            <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
                <View style={styles.orderWrapper}>
                    <Text styles={styles.orderText}>Rendelés</Text>
                    <Feather name="chevron-right" size={18} color={colors.black}/>
                </View>
            </TouchableOpacity>
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
    },
    infoWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftInfoWrapper: {
        paddingLeft: 20,

    },
    infoItemWrapper: {
        paddingLeft: 20,
        marginBottom: 20,

    },
    infoItemTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    infoItemText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: colors.textDark,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
    ingredientsWrapper: {
        marginTop: 30,

    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientsItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    },
    ingredientImage: {
        resizeMode: 'contain'
    },
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'


    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,

    },

})
