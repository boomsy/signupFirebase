import React, { useCallback, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, images, FONTS, SIZES } from '../constants'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'


const isTestMode  = true


const initialState = {

  inputValues : {
    email    : isTestMode ? "example@example" : "",
    password : isTestMode ? "*******" : "",
  },

  inputValidities : {
    email    : false,
    password : false,
  },
  
  formIsValid : false

}


const Login = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangedHandler = useCallback((inputId : string, inputValue : string) => {
    const result  = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult : result, inputValue})
  }, [dispatchFormState]);


  const authhandler = () => {
    console.log( ' AuthHandler ------> ',
     formState.inputValues.email , formState.inputValues.password )
  }

  return (
    <SafeAreaView style={ tw.style('flex-1', {backgroundColor : COLORS.background}) } >
      <ScrollView 
        style={
          tw.style(
            'flex-1',
            'p-4',
            {backgroundColor : COLORS.background}
          )
        }
        >

          <Image 
            source={images.logo}
            resizeMode='contain'
            style={tw`w-25 h-25 -ml-5 mb-3`}
          />

          <Text style={{...FONTS.h2, color: COLORS.white}} > 
            Login 
          </Text>

          <Text style={{...FONTS.body2, color: COLORS.gray}} > 
            Sign in now to access your exercices and saved music . 
          </Text>

          <View style={tw`my-4`}>

            <Input 
              id = "email"
              placeholder = "Email address"
              placeholderTextColor = {COLORS.gray}
              errorText={formState.inputValidities["email"]}
              onInputChanged={inputChangedHandler}
            />

            <Input 
              id = "password"
              placeholder = "Password"
              placeholderTextColor = {COLORS.gray}
              errorText={formState.inputValidities["password"]}
              onInputChanged={inputChangedHandler}
            />

            <Button 
              title = "Signup"
              onPress = {authhandler}
              isLoading = {isLoading}
              style={tw.style('my-2', {width: SIZES.width - 32})}
            />

            <View style={tw` flex-row justify-center items-center my-2`}>
              <Text style={{...FONTS.body3, color: COLORS.white}}>
                Don't have an account 
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("Signup")} >
                <Text style={{...FONTS.h3, color: COLORS.white}}> {" "} Signup </Text>
              </TouchableOpacity>
            </View>

          </View>

      </ScrollView>
    </SafeAreaView>
  )
}


export default Login
