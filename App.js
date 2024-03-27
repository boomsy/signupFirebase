import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen'
import {SafeAreaProvider} from "react-native-safe-area-context"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native"
import {FONTS} from "./constants/fonts"
import { useCallback } from 'react'
import { Login, Signup, Welcome } from './screens'
import { Provider } from "react-redux"
import { store } from "./store/store/"


const  Stack  = createNativeStackNavigator(); 

// https://www.youtube.com/watch?v=s3Q0DB-XzzA


export default function App() {

  const [fontsloaded]    = useFonts(FONTS);

  const onLayoutRootView  = useCallback(async () => {
    if(fontsloaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsloaded]);


  if(!fontsloaded) {
    return null;
  }

  return (

    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown : false}}
              initialRouteName='Welcome' >
        
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='Login'   component={Login} />
                <Stack.Screen name='Signup'  component={Signup} />

            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>

  );


}

