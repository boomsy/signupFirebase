export const reducer = (state : any, action : any) => {

      const {validationResult, inputId, inputValue} = action;


      const updatedValues = {
            ...state.inputValues,
            [inputId] : inputValue
      }
   

      const updateValidities = {
            ...state.inputValidities,
            [inputId] : validationResult
      }


      let updatedFormIsValid = true



      for (const key in updateValidities) {
            if( updateValidities[key] !== undefined) {
                  updatedFormIsValid = false
                  break
            }
      }


      return {
            inputValues     : updatedValues,
            inputValidities : updateValidities,
            formIsValid     : updatedFormIsValid
      }

}