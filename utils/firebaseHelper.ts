
import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence   } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


let firebaseApp : any;


export const getFirebaseApp = () => {

      if(firebaseApp) {
            return firebaseApp
      }


      const firebaseConfig = {
            apiKey: "AIzaSyBh5gQj_55xFeM_cNUmmH1-zz6iVDB1Wg8",
            authDomain: "authfirebasereactnative-83506.firebaseapp.com",
            projectId: "authfirebasereactnative-83506",
            storageBucket: "authfirebasereactnative-83506.appspot.com",
            messagingSenderId: "793071981877",
            appId: "1:793071981877:web:4279eaadec27cefae9287c",
            measurementId: "G-1SHKECBJZP"
      }


      const app = (getApps().length === 0)  ?  initializeApp(firebaseConfig) : getApp()


      initializeAuth(app, {
         persistence: getReactNativePersistence(ReactNativeAsyncStorage)
      })

      firebaseApp = app;

      return app
}




