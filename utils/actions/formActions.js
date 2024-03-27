import { validateEmail, validatePassword, validateString } from "../ValidationConstraints"

export const validateInput = (inputId, inputValue) => {

      let result

      switch(inputId) {

            case 'fullName' :
                  result = validateString(inputId, inputValue) 
            break

            case 'email' :
                  result = validateEmail(inputId, inputValue)
            break

            case 'password' :
                  result = validatePassword(inputId, inputValue)
            break
      }

      return result

}
