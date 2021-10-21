import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Image, TextInput, Button} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../assets/colors/colors';
import DatePicker from 'react-native-date-picker'
export default OrderDetails = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [dateChosen, setDateChosen] = useState("");

    return (
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark}>
                            </Feather>
                        </View>
                    </TouchableOpacity>
                    </View>

            <View style={styles.inputContainer}>
                <Text style={styles.headerText}>Rendelés Megerősítése</Text>
                <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Neptun kód"></TextInput>
                </View>
                <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="*****"></TextInput>
                </View>
                <Button style={styles.DateButton} title="Válassz időpontot" onPress={() => setOpen(true)} />
                    <DatePicker
                        locale="hu"
                        title="Időpont"
                        confirmText="Ok"
                        cancelText="Mégse"
                        mode="time"
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setDateChosen(date.getUTCHours() + ":"+ date.getUTCMinutes())
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                    <Text>{dateChosen}</Text>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Rendelés Véglegesítése</Text>
                </TouchableOpacity>

            </View>
        
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        paddingBottom: 15,
    },
    inputContainer: {
        marginTop: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'

    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
      },

      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },

      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: "#ffebcd",
      },

      loginText: {
          fontFamily: 'Montserrat-Semibold'
      },
      DateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
 

})
