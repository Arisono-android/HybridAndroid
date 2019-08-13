import  * as T from "../actionTypes"

export const changeBtnText=(text)=>{
  return {
      type:T.CHANGE_BTN_TEXT,
      payload:text
  }
}