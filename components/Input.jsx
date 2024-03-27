import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import tw, { style } from 'twrnc'
import { COLORS, SIZES } from '../constants'

const Input = (props) => {

      const onChangeText = (text) => {
            props.onInputChanged(props.id, text)
      }

      return (
            <View style={styles.container}>

                  <View style={tw.style( 'flex-row rounded-b-lg ', {borderColor : COLORS.gray}, styles.inputContainer)}  >
                        <TextInput 
                              {...props}
                              placeholder={props.placeholder}
                              placeholderTextColor={props.placeholderTextColor}
                              style={styles.input}
                              autoCapitalize='none'
                              onChangeText={onChangeText}
                        />
                  </View>

                  {
                        props.errorText && (
                              <View style={styles.errorContainer} >
                                    <Text style={styles.errorText}> {props.errorText[0]} </Text>
                              </View>
                        )
                  }

            </View>
      )

}


const styles = StyleSheet.create({

      container : {

      },

      inputContainer : {
        width: '100%',
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        marginVertical: 16
      },

      input : {
       color: COLORS.gray,
       flex : 1,
       fontFamily : "regular",
       paddingTop : 0,
       fontSize: 18
      },

      errorContainer : {
         marginVertical : 2   
      },

      errorText : {
        color: "red",
        fontSize: 12
      }

})


export default Input