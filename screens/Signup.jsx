import React, { useCallback, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS, images, FONTS, SIZES } from '../constants'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'
import { signUp } from '../utils/actions/authActions'
import { useDispatch } from 'react-redux'


const isTestMode  = true


const initialState = {

  inputValues : {
    fullName : isTestMode ? "John Smith" : "",
    email    : isTestMode ? "example@example" : "",
    password : isTestMode ? "*******" : "",
  },

  inputValidities : {
    fullName : false,
    email    : false,
    password : false,
  },
  
  formIsValid : false

}


const Signup = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)
  const dispatch  = useDispatch()

  const inputChangedHandler = useCallback((inputId, inputValue) => {
    const result  = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult : result, inputValue})
  }, [dispatchFormState]);



  const authhandler = async () => {
    try{
      setIsLoading(true)
      const action = signUp(
        formState.inputValues?.fullName, 
        formState.inputValues?.email, 
        formState.inputValues?.password
      )

      await dispatch(action)
      Alert.alert(" Create account ", " Accunt successfully created ")
      setError(null)
      setIsLoading(false)
      
    } catch(error) {
        console.log(error)
        setError(error?.message)
        setIsLoading(false)
    }
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
            Sign Up 
          </Text>

          <Text style={{...FONTS.body2, color: COLORS.gray}} > 
            Sgnup now for free and start meditating and explore Medic. 
          </Text>

          <View style={tw`my-4`}>

            <Input 
              id = "fullName"
              placeholder = "Name"
              placeholderTextColor = {COLORS.gray}
              errorText={formState.inputValidities["fullName"]}
              onInputChanged={inputChangedHandler}
            />

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
                Already have an account 
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("Login")} >
                <Text style={{...FONTS.h3, color: COLORS.white}}> {" "} Login </Text>
              </TouchableOpacity>
            </View>

          </View>

      </ScrollView>
    </SafeAreaView>
  )

}


export default Signup
