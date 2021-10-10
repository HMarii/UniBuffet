import React from 'react'
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { isWithStatement } from 'typescript'
import colors from '../assets/colors/colors'
import categoriesData from '../assets/data/categoriesData'
import popularData  from '../assets/data/popularData'

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Home = () => {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? colors.primary : colors.textLight,
                marginLeft: item.selected == 1 ?  20 : 0
            }]}>
                
                <Image source={item.image} style={styles.categoryItemImage}></Image>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary
                }]}>
                    <Feather 
                        name="chevron-right" 
                        size={8} 
                        style={styles.categorySelectIcon} 
                        color={item.selected ? colors.black : colors.white }>
                    </Feather>
                </View>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
            {/* Fejléc */}
            <SafeAreaView>
                <View style={styles.header}>

                    <Image source={require('../assets/images/wolfprofile.png')} style={styles.profileImage}/>

                   <Feather name="menu" size={24} colors={colors.textDark}/>
                </View>
            </SafeAreaView>

            {/* Címkék */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Farkas éhes vagy?</Text>
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

            {/* Népszerűek */}
            <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Népszerű</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                key={item.id}
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>Heti kínálatunk</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Tömeg {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
          
        </View>
        </ScrollView>
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
        
    },

    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
    },

    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    categoryItemWrapper: {
        backgroundColor: colors.textLight,
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },

    categorySelectIcon: {
        alignSelf: 'center',
    },

    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,

    },

    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,


    },

    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    popularWrapper: {
        paddingHorizontal: 20,
        

    },
    popularTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,


    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,

    },
 

    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
      },
      ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
      },
      rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
      },
      popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
      },

});